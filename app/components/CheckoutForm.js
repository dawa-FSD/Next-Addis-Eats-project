"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import LocationMap from "./LocationMapLoader";

const DEFAULT_LOCATION = {
  latitude: 9.03,
  longitude: 38.74,
};

export default function CheckoutForm() {
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
    latitude: DEFAULT_LOCATION.latitude,
    longitude: DEFAULT_LOCATION.longitude,
  });

  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleLocationSelect({ latitude, longitude }) {
    setForm((current) => ({
      ...current,
      latitude,
      longitude,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setOrderId("");

    if (!cart.length) {
      setMessage("Your cart is empty. Please add a dish first.");
      return;
    }

    if (form.name.trim().length < 2) {
      setMessage("Please enter your full name.");
      return;
    }

    if (!/^09\d{8}$/.test(form.phone.trim())) {
      setMessage(
        "Enter a valid Ethiopian phone number, for example 0912345678.",
      );
      return;
    }

    if (form.address.trim().length < 5) {
      setMessage("Please enter a complete delivery address.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            name: form.name.trim(),
            phone: form.phone.trim(),
            address: form.address.trim(),
            latitude: form.latitude,
            longitude: form.longitude,
          },
          payment: form.payment,
          items: cart.map(({ id, quantity }) => ({
            id,
            quantity,
          })),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setMessage(
          result.message ||
            Object.values(result.errors || {}).join(" ") ||
            "Could not place your order.",
        );
        return;
      }

      setOrderId(result.order.id);
      setMessage("Your order has been placed successfully!");

      clearCart();

      setForm({
        name: "",
        phone: "",
        address: "",
        payment: "Cash on Delivery",
        latitude: DEFAULT_LOCATION.latitude,
        longitude: DEFAULT_LOCATION.longitude,
      });
    } catch {
      setMessage("Could not connect to the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="checkout-layout">
      <section className="panel checkout-form-panel">
        <h2>Delivery information</h2>

        {message && (
          <div className="notice" role="status" aria-live="polite">
            {message}

            {orderId && (
              <p>
                <strong>Order number: {orderId}</strong>
              </p>
            )}
          </div>
        )}

        {!cart.length && !orderId ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>

            <Link className="button button-primary" href="/menu">
              Browse menu
            </Link>
          </div>
        ) : (
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Abebe Kebede"
                required
                minLength={2}
              />
            </label>

            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="0912345678"
                pattern="09[0-9]{8}"
                title="Enter 09 followed by 8 digits"
                required
              />
            </label>

            <label>
              Delivery address
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Bole, Addis Ababa"
                rows={3}
                required
                minLength={5}
              />
            </label>

            <LocationMap onLocationSelect={handleLocationSelect} />

            <label>
              Payment method
              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
              >
                <option>Cash on Delivery</option>
                <option>TeleBirr</option>
              </select>
            </label>

            <button
              className="button button-primary button-wide"
              disabled={submitting || !cart.length}
            >
              {submitting ? "Placing order..." : "Place order"}
            </button>
          </form>
        )}
      </section>

      <aside className="panel order-summary">
        <h2>Your order</h2>

        {cart.length ? (
          cart.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                ETB {(item.price * item.quantity).toLocaleString()}
              </strong>
            </div>
          ))
        ) : (
          <p className="muted">No items in the current cart.</p>
        )}

        <div className="summary-total">
          <span>Total</span>
          <strong>ETB {total.toLocaleString()}</strong>
        </div>
      </aside>
    </div>
  );
}
