import type { APIRoute } from 'astro';
export const prerender = false;
// Contact is handled through the visible mailto link. Never report a simulated delivery.
export const POST: APIRoute = () => new Response(JSON.stringify({
  status: 'error', message: 'Contact: engelsdamiron9@gmail.com',
}), { status: 410, headers: { 'Content-Type': 'application/json' } });
