// import Link from "next/link";
// import { notFound } from "next/navigation";
// import dishes from "../../data/dishes";
// import AddToCartButton from "../../components/AddToCartButton";

// export function generateStaticParams() {
//   return dishes.map((dish) => ({ id: dish.id }));
// }

// export default async function DishDetailsPage({ params }) {
//   const { id } = await params;
//   const dish = dishes.find((item) => item.id === id);
//   if (!dish) notFound();

//   return (
//     <section className="container detail-page">
//       <Link className="back-link" href="/menu">
//         ← Back to menu
//       </Link>
//       <div className="detail-layout">
//         <div className="detail-image">
//           <img src={dish.image} alt={dish.name} />
//         </div>
//         <div className="detail-copy">
//           <span className="eyebrow">{dish.category.toUpperCase()}</span>
//           <h1>{dish.name}</h1>
//           <p className="detail-description">{dish.description}</p>
//           <div className="detail-facts">
//             <span>◷ {dish.prepTime}</span>
//             <span>{dish.vegetarian ? "Vegetarian" : "Meat dish"}</span>
//             <span>{dish.spicy ? "Spicy" : "Mild flavor"}</span>
//           </div>
//           <strong className="detail-price">
//             ETB {dish.price.toLocaleString()}
//           </strong>
//           <AddToCartButton dish={dish} />
//           <p className="muted detail-note">
//             Prepared fresh. Prices are illustrative for this capstone project.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import dishes from "../../data/dishes";
import AddToCartButton from "../../components/AddToCartButton";

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: String(dish.id),
  }));
}

export default function DishDetailsPage({ params }) {
  return (
    <Suspense
      fallback={
        <section className="container detail-page">
          <p>Loading dish details...</p>
        </section>
      }
    >
      <DishDetails params={params} />
    </Suspense>
  );
}

async function DishDetails({ params }) {
  const { id } = await params;

  const dish = dishes.find((item) => String(item.id) === String(id));

  if (!dish) {
    notFound();
  }

  return (
    <section className="container detail-page">
      <Link className="back-link" href="/menu">
        ← Back to menu
      </Link>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={dish.image} alt={dish.name} />
        </div>

        <div className="detail-copy">
          <span className="eyebrow">{dish.category.toUpperCase()}</span>

          <h1>{dish.name}</h1>

          <p className="detail-description">{dish.description}</p>

          <div className="detail-facts">
            <span>◷ {dish.prepTime}</span>
            <span>{dish.vegetarian ? "Vegetarian" : "Meat dish"}</span>
            <span>{dish.spicy ? "Spicy" : "Mild flavor"}</span>
          </div>

          <strong className="detail-price">
            ETB {dish.price.toLocaleString()}
          </strong>

          <AddToCartButton dish={dish} />

          <p className="muted detail-note">
            Prepared fresh. Prices are illustrative for this capstone project.
          </p>
        </div>
      </div>
    </section>
  );
}
