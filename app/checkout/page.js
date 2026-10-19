import CheckoutForm from "../components/CheckoutForm";

export const metadata = { title: "Checkout | Addis Eats" };

export default function CheckoutPage() {
  return (
    <section className="page-section container">
      <div className="page-heading compact-heading">
        <span className="eyebrow">ALMOST THERE</span>
        <h1>
          Complete your <em>order.</em>
        </h1>
        <p>Share your delivery details to place your order.</p>
      </div>
      <CheckoutForm />
    </section>
  );
}
