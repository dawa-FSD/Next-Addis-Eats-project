// export default function Footer() {
//   return (
//     <footer className="site-footer">
//       <div className="footer-inner">
//         <div>
//           <strong>Addis Eats</strong>
//           <p>Good food. Ethiopian soul.</p>
//         </div>
//         <p>Fresh flavors, delivered with care.</p>
//         <small>
//           © {year || "Addis Eats"} {year && "Addis Eats. All rights reserved."}
//         </small>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import dishes from "../data/dishes";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-icon">A</span>
              <span>
                Addis <span className="footer-logo-accent">Eats</span>
              </span>
            </Link>

            <p className="footer-description">
              Discover the taste of Ethiopia. Fresh food, authentic flavors, and
              delicious meals delivered to your door.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                tk
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/menu">Our Menu</Link>
            <Link href="/cart">Shopping Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </div>

          <div className="footer-column">
            <h3>Popular Categories</h3>
            <Link href="/menu">Ethiopian Food</Link>
            <Link href="/menu">ALL</Link>
            <Link href="/menu">Vegetarian</Link>
            <Link href="/menu">Drinks</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <p>
              <span className="footer-contact-icon">📍</span>
              Addis Ababa, Ethiopia
            </p>
            <p>
              <span className="footer-contact-icon">🕒</span>
              Daily: 9:00 AM – 10:00 PM
            </p>
            <p>
              <span className="footer-contact-icon">🍽️</span>
              Made with love for food lovers
            </p>
            <Link href="/menu" className="footer-order-button">
              Order Now <span>→</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Addis Eats. All rights reserved.</p>

          <p className="footer-made">
            Made with <span>♥</span> in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
