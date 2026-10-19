"use client";

export default function Error({ reset }) {
  return (
    <section className="container error-state">
      <span className="eyebrow">A LITTLE HICCUP</span>
      <h1>Something went wrong.</h1>
      <p>Please try again. Your appetite deserves better.</p>
      <button className="button button-primary" onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}
