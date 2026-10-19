"use client";

import { useCart } from "./CartProvider";

export default function AddToCartButton({ dish, className = "" }) {
  const { addItem } = useCart();
  return (
    <button
      className={`button button-primary ${className}`}
      type="button"
      onClick={() => addItem(dish)}
    >
      Add to cart
    </button>
  );
}
