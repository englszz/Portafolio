import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import vercel from '@astrojs/vercel';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use 'pre-mermaid' on Vercel/production to avoid Playwright, 'inline-svg' locally
const mermaidStrategy = isProduction || isVercel ? 'pre-mermaid' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

export default defineConfig({
  site: 'https://engelsdamiron.me',

  // ⭐ AÑADIDO: ALIAS PARA QUE FUNCIONE "@/assets"
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: mermaidStrategy,
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: vercel(),
});
