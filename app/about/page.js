// import Link from "next/link";

// export const metadata = { title: "Our Story | Addis Eats" };

// export default function AboutPage() {
//   return (
//     <section className="page-section container about-page">
//       <div className="page-heading">
//         <span className="eyebrow">OUR STORY</span>
//         <h1>
//           Food brings us <em>together.</em>
//         </h1>
//         <p>
//           Addis Eats is a capstone project inspired by the richness of Ethiopian
//           food and the joy of sharing a meal.
//         </p>
//       </div>
//       <div className="about-grid">
//         <img src="/images/menu/injera.jpg" alt="Traditional injera" />
//         <div>
//           <h2>Rooted in Ethiopian hospitality</h2>
//           <p>
//             From comforting shiro to celebratory doro wat, Ethiopian food
//             carries stories of family, community, and tradition. Our goal is to
//             make exploring these dishes easy and welcoming.
//           </p>
//           <p>
//             This website is a learning project. Menu prices, ordering, and
//             payment options are for demonstration and do not represent a live
//             restaurant service.
//           </p>
//           <Link className="button button-primary" href="/menu">
//             Explore the menu
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export const metadata = {
  title: "Our Story | Addis Eats",
  description:
    "Discover the story behind Addis Eats and our love for Ethiopian food and hospitality.",
};

export default function AboutPage() {
  return (
    <section className="page-section container about-page">
      <div className="page-heading">
        <span className="eyebrow">OUR STORY</span>

        <h1>
          Food brings us <em>together.</em>
        </h1>

        <p>
          Addis Eats is a capstone project inspired by the richness of Ethiopian
          food and the joy of sharing a meal.
        </p>
      </div>

      <div className="about-grid">
        <img src="/images/menu/injera.jpg" alt="Traditional Ethiopian injera" />

        <div>
          <h2>Rooted in Ethiopian hospitality</h2>

          <p>
            From comforting shiro to celebratory doro wat, Ethiopian food
            carries stories of family, community, and tradition. Our goal is to
            make exploring these dishes easy and welcoming.
          </p>

          <p>
            This website is a learning project. Menu prices, ordering, and
            payment options are for demonstration and do not represent a live
            restaurant service.
          </p>

          <Link className="button button-primary" href="/menu">
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
