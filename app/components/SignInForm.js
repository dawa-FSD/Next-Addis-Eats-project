"use client";

import { useState } from "react";

export default function SignInForm() {
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "This is a demonstration sign-in form only. Real authentication and protected sessions are not configured yet.",
    );
  }
  return (
    <form className="checkout-form panel signin-form" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Password
        <input
          type="password"
          minLength={8}
          placeholder="At least 8 characters"
          required
        />
      </label>
      <button className="button button-primary button-wide">Continue</button>
      {message && <p className="notice">{message}</p>}
    </form>
  );
}
