# Rendering strategy

- `app/page.tsx`, `app/menu/page.js`, `app/menu/[id]/page.js`, and informational pages are Server Components by default.
- `MenuExplorer`, `CartProvider`, `CartView`, `CheckoutForm`, and interactive forms are Client Components.
- Menu data is imported server-side for initial render; the menu explorer can refresh through SWR and `GET /api/dishes`.
- The cart uses localStorage, which is browser-only, so its provider is a Client Component.
