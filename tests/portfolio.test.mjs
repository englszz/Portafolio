import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import { chromium } from 'playwright';
import { parse } from 'parse5';

const root = path.resolve('dist/client');
let server, browser, origin;
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const nodes = (node) => [node, ...(node.childNodes ?? []).flatMap(nodes)];
const htmlFiles = async (dir) => (await Promise.all((await fs.readdir(dir, { withFileTypes: true })).map((entry) => entry.isDirectory() ? htmlFiles(path.join(dir, entry.name)) : entry.name.endsWith('.html') ? [path.join(dir, entry.name)] : []))).flat();
const routeFile = (route) => path.join(root, decodeURIComponent(route), path.extname(route) ? '' : 'index.html');

before(async () => {
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
  server = http.createServer(async (req, res) => {
    const file = routeFile(new URL(req.url, 'http://localhost').pathname);
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    try { res.setHeader('Content-Type', mime[path.extname(file)] ?? 'application/octet-stream'); res.end(await fs.readFile(file)); }
    catch { res.writeHead(404).end('Not found'); }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge', headless: true });
  const newContext = browser.newContext.bind(browser);
  browser.newContext = async (options) => {
    const context = await newContext(options);
    await context.route('**/*', (route) => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
    context.setDefaultTimeout(10000);
    return context;
  };
});
after(async () => { await browser?.close(); if (server) await new Promise((resolve) => server.close(resolve)); });

test('every page has a matching translation, valid local links and localized metadata', async () => {
  const files = await htmlFiles(root);
  assert.equal(files.length, 60); // 21 posts, four projects, and five other pages in each language.
  for (const file of files) {
    const pageNodes = nodes(parse(await fs.readFile(file, 'utf8')));
    const english = path.relative(root, file).startsWith('en' + path.sep);
    assert.equal(attr(pageNodes.find((n) => n.tagName === 'html'), 'lang'), english ? 'en' : 'es', file);
    assert.equal(pageNodes.filter((n) => n.tagName === 'h1').length, 1, file);
    for (const locale of ['es', 'en']) {
      const alternate = pageNodes.find((n) => n.tagName === 'link' && attr(n, 'hreflang') === locale);
      assert.ok(alternate, file);
      const pathname = new URL(attr(alternate, 'href')).pathname;
      const target = /^\/404\/?$/.test(pathname) ? path.join(root, '404.html') : routeFile(pathname);
      await fs.access(target);
    }
    for (const property of ['og:title', 'og:description', 'og:image']) assert.ok(pageNodes.some((n) => attr(n, 'property') === property && attr(n, 'content')), `${file}: ${property}`);
    for (const node of pageNodes) {
      const href = attr(node, 'href');
      if (node.tagName === 'a' && href?.startsWith('/') && !href.startsWith('//')) {
        const target = new URL(href, origin).pathname;
        await fs.access(/^\/404\/?$/.test(target) ? path.join(root, '404.html') : routeFile(target));
      }
    }
  }
});

test('all 21 journey posts appear in both languages without the removed duplicate', async () => {
  for (const prefix of ['', '/en']) {
    const doc = nodes(parse(await fs.readFile(routeFile(prefix + '/blog'), 'utf8')));
    assert.equal(doc.filter((n) => attr(n, 'class')?.includes('blog-post-card-wrapper')).length, 21);
    assert.ok(!doc.some((n) => attr(n, 'href')?.replace(/\/$/, '') === `${prefix}/blog/en/27`));
    await assert.rejects(fs.access(routeFile(prefix + '/blog/en/27')));
    for (const id of ['26', '28', 'example-post']) assert.ok(doc.some((n) => attr(n, 'href')?.replace(/\/$/, '') === `${prefix}/blog/en/${id}`));
  }
});

test('Spanish default ignores browser and old saved preference; manual switching preserves pages', async () => {
  const context = await browser.newContext({ locale: 'en-US' });
  const page = await context.newPage();
  await page.goto(origin + '/');
  assert.equal(await page.locator('html').getAttribute('lang'), 'es');
  await page.evaluate(() => localStorage.setItem('portfolio-language', 'en'));
  await page.reload();
  assert.equal(new URL(page.url()).pathname, '/');
  assert.equal(await page.getByText('Inglés — Nivel intermedio-alto', { exact: true }).count(), 2);
  await page.locator('a[data-language="en"]:visible').click();
  await page.waitForURL('**/en/');
  assert.match(await page.locator('main').innerText(), /Cybersecurity Student/);
  await page.locator('a[data-language="es"]:visible').click();
  await page.waitForURL(origin + '/');
  await page.reload();
  assert.equal(new URL(page.url()).pathname, '/');
  await page.goto(origin + '/blog/en/example-post');
  await page.locator('a[data-language="en"]:visible').click();
  await page.waitForURL(/\/en\/blog\/en\/example-post\/?$/);
  assert.match(await page.locator('main').innerText(), /National Identity/);
  await page.goto(origin + '/projects/ding');
  assert.equal(await page.locator('html').getAttribute('lang'), 'es');
  await page.locator('a[data-language="en"]:visible').click();
  await page.waitForURL(/\/en\/projects\/ding\/?$/);
  assert.match(await page.locator('main').innerText(), /About this project/);
  await context.close();
});

test('Spanish browser preference and unsupported-language fallback', async () => {
  for (const locale of ['es-DO', 'fr-FR']) {
    const context = await browser.newContext({ locale });
    const page = await context.newPage();
    await page.goto(origin + '/');
    assert.equal(await page.locator('html').getAttribute('lang'), 'es');
    await context.close();
  }
});

test('mobile, tablet and desktop layouts fit without horizontal overflow', async () => {
  const context = await browser.newContext({ locale: 'es-DO' });
  const page = await context.newPage();
  const screenshots = path.join(os.tmpdir(), 'portfolio-bilingual-review');
  await fs.mkdir(screenshots, { recursive: true });
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/en/', '/contact', '/en/contact', '/blog', '/en/blog', '/projects/ding', '/en/projects/ding']) {
      await page.goto(origin + route);
      const sizes = await page.evaluate(() => ({ width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
      assert.ok(sizes.content <= sizes.width + 1, `${route} at ${width}px: ${JSON.stringify(sizes)}`);
      if ([390, 768, 1440].includes(width) && ['/', '/en/'].includes(route)) {
        await page.locator('main img').evaluateAll(async (images) => {
          images.forEach((img) => img.loading = 'eager');
          await Promise.all(images.map((img) => img.decode()));
        });
        const label = route === '/' ? 'es' : 'en';
        await page.screenshot({ path: path.join(screenshots, label + '-' + width + '.png'), fullPage: true });
        await page.screenshot({ path: path.join(screenshots, label + '-' + width + '-top.png') });
      }
    }
  }
  console.log('Review screenshots:', screenshots);
  await context.close();
});

test('search, theme persistence and translated image previews work after navigation', async () => {
  const context = await browser.newContext({ locale: 'en-US' });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(origin + '/en/blog');
  await page.getByPlaceholder('Search...').fill('SQL Server');
  await page.waitForFunction(() => document.querySelectorAll('.blog-post-card-wrapper:not(.hidden)').length === 1);
  await page.locator('.blog-post-card-wrapper:not(.hidden) a').first().click();
  await page.waitForURL(/\/en\/blog\/en\/16\/?$/);
  await page.locator('[data-theme-toggle]:visible').click();
  const dark = await page.locator('html').evaluate((el) => el.classList.contains('dark'));
  await page.getByRole('link', { name: 'Back to journey' }).click();
  await page.waitForURL(/\/en\/blog\/?$/);
  assert.equal(await page.locator('html').evaluate((el) => el.classList.contains('dark')), dark);
  await page.goto(origin + '/en/projects/ding');
  await page.getByText('Click to enlarge').click();
  await page.getByRole('dialog').waitFor();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  assert.deepEqual(errors, []);
  await context.close();
});
