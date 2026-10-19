import Link from "next/link";
import CartView from "../components/CartView";

export const metadata = { title: "Your Cart | Addis Eats" };

export default function CartPage() {
  return (
    <section className="page-section container">
      <div className="page-heading compact-heading">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>
          Your <em>cart.</em>
        </h1>
        <p>Review your items before checkout.</p>
      </div>
      <CartView />
    </section>
  );
}
