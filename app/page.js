import Link from "next/link";
import dishes from "./data/dishes";
import DishCard from "./components/DishCard";

export default function HomePage() {
  const featured = dishes.filter((dish) => dish.featured).slice(0, 4);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-line" /> AUTHENTIC ETHIOPIAN FLAVORS
          </span>
          <h1>
            Good food.
            <br />
            <em>Ethiopian soul.</em>
          </h1>
          <p>
            Discover the warmth of Ethiopian cooking, from beloved classics to
            fresh favorites made with care.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/menu">
              Explore the menu <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/about">
              Our story
            </Link>
          </div>
          <div className="hero-points">
            <span>✦ Freshly prepared</span>
            <span>✦ Local favorites</span>
            <span>✦ Easy ordering</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/menu/doro-wat.jpg"
              alt="Traditional Ethiopian Doro Wat"
            />
          </div>
          <div className="hero-note">
            <span className="note-star">✳</span>
            <div>
              <strong>Made with soul</strong>
              <small>Inspired by Ethiopian tradition</small>
            </div>
          </div>
          <div className="hero-stamp">
            TASTE
            <br />
            OF
            <br />
            ETHIOPIA
          </div>
        </div>
      </section>
      <section className="trust-strip">
        <div>
          <strong>01</strong>
          <span>Traditional flavors</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Fresh ingredients</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Simple ordering</span>
        </div>
        <div>
          <strong>04</strong>
          <span>Made for sharing</span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A FEW FAVORITES</span>
            <h2>
              Made to make you <em>happy.</em>
            </h2>
          </div>
          <Link className="arrow-link" href="/menu">
            View full menu <span>→</span>
          </Link>
        </div>
        <div className="dish-grid">
          {featured.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
      <section className="story-band">
        <div className="story-image">
          <img src="/images/menu/injera.jpg" alt="Ethiopian injera" />
        </div>
        <div className="story-content">
          <span className="eyebrow">ROOTED IN TRADITION</span>
          <h2>
            A taste of home,
            <br />
            <em>wherever you are.</em>
          </h2>
          <p>
            Food is how we share our culture, bring people together, and turn an
            ordinary meal into a memory. Addis Eats brings those flavors to your
            table.
          </p>
          <Link className="button button-primary" href="/about">
            Get to know us
          </Link>
        </div>
      </section>
      <section className="cta-section container">
        <div>
          <span className="eyebrow">YOUR NEXT FAVORITE IS WAITING</span>
          <h2>Hungry? Let's fix that.</h2>
        </div>
        <Link className="button button-primary" href="/menu">
          Order something good <span>↗</span>
        </Link>
      </section>
    </>
  );
}
