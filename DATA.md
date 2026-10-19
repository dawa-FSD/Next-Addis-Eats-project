# Data strategy

- Menu data is currently defined in `app/data/dishes.js`.
- Server pages can import this data directly.
- `GET /api/dishes` supports `q`, `category`, `page`, and `limit` query parameters.
- The menu explorer uses SWR to revalidate the API response.
- Cart state is stored in browser localStorage under `addis-eats-cart`.
- `POST /api/orders` validates customer details and looks up each dish by ID on the server, so the browser cannot set its own item price.
- Order records are currently in memory. Use a database for durable storage.
