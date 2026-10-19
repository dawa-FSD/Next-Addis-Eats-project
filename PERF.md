# Performance notes

- Keep menu and dish-detail pages as Server Components where possible.
- Keep interactivity isolated to cart, menu explorer, and checkout components.
- Dish cards use lazy-loaded images.
- Use optimized local image sizes and Next.js Image when image configuration and dimensions are finalized.
- Test with `npm run build` and Lighthouse before submission.
