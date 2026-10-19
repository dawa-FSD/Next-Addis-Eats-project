"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartView() {
  const { cart, total, changeQuantity, removeItem, clearCart, ready } =
    useCart();
  if (!ready) return <p className="empty-state">Loading your cart...</p>;
  if (!cart.length)
    return (
      <div className="empty-state">
        <h2>Your cart is empty</h2>
        <p>Explore our menu and find something delicious.</p>
        <Link href="/menu" className="button button-primary">
          Explore menu
        </Link>
      </div>
    );

  return (
    <div className="cart-layout">
      <section className="cart-items">
        {cart.map((item) => (
          <article className="cart-item panel" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="price">ETB {item.price.toLocaleString()}</p>
              <div className="quantity-control">
                <button
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => changeQuantity(item.id, -1)}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  aria-label={`Increase ${item.name}`}
                  onClick={() => changeQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart-item-end">
              <strong>
                ETB {(item.price * item.quantity).toLocaleString()}
              </strong>
              <button
                className="text-button"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
        <button className="text-button" onClick={clearCart}>
          Clear cart
        </button>
      </section>
      <aside className="panel cart-summary">
        <h2>Order summary</h2>
        <div className="summary-row">
          <span>Items</span>
          <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <strong>ETB {total.toLocaleString()}</strong>
        </div>
        <Link className="button button-primary button-wide" href="/checkout">
          Continue to checkout
        </Link>
        <Link className="button button-outline button-wide" href="/menu">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
