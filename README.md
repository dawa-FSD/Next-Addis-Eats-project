# Addis Eats — Next.js Capstone

A responsive Ethiopian food ordering demo built with Next.js App Router, React, API Route Handlers, SWR, and localStorage cart state.

## Features

- Homepage, menu, dish detail, about, cart, checkout, sign-in demo, and dashboard demo.
- Real local food images served from `public/images/menu/`.
- Menu search, category filtering, client-side pagination, and SWR refresh.
- Cart state shared through React Context and persisted in localStorage.
- Orders API validates customer input and resolves item prices from server-side menu data.
- Loading, error, and not-found UI.
- Responsive dark design with orange accents.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Local images

The project expects these files in `public/images/menu/`: `doro-wat.jpg`, `kitfo.jpg`, `tibs.jpg`, `shiro.jpg`, `bayantu.jpg`, `firfir.jpg`, `ayib.jpg`, `goman.jpg`, `kikil.jpg`, `injera.jpg`, `sanbusa.jpg`, `buna.jpg`, `macchiato.jpg`, `sprice.jpg`, `frash-juice.jpg`, and `soft-drink.jpg`.

The app can run with missing images, but those dish cards will show a broken image until the expected file is added. Adjust `image` paths in `app/data/dishes.js` if your filenames differ.

## Important limitations

- This is a learning capstone, not a production ordering service.
- Orders are stored in server memory and reset when the server restarts. Use a database for persistent orders.
- Sign-in is a demonstration form. No real authentication or authorization is implemented.
- TeleBirr is displayed as a selection only; no payment gateway is connected.
- Prices are demonstration data; verify them before using in a real business.
