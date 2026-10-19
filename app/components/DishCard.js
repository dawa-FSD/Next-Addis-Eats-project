import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <Link className="dish-image-wrap" href={`/menu/${dish.id}`}>
        <img
          className="dish-image"
          src={dish.image}
          alt={dish.name}
          loading="lazy"
        />
        {dish.featured && <span className="image-badge">Chef's pick</span>}
      </Link>
      <div className="dish-card-body">
        <div className="dish-meta">
          <span>{dish.category}</span>
          <span>{dish.prepTime}</span>
        </div>
        <h3>
          <Link href={`/menu/${dish.id}`}>{dish.name}</Link>
        </h3>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-card-bottom">
          <strong className="price">ETB {dish.price.toLocaleString()}</strong>
          <AddToCartButton dish={dish} />
        </div>
      </div>
    </article>
  );
}
