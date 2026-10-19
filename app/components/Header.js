"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">A</span>
          <span className="brand-copy">
            <strong>Addis Eats</strong>
            <small>THE TASTE OF ETHIOPIA</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <Link className="cart-link" href="/cart">
          Cart <span>{count}</span>
        </Link>
      </div>
    </header>
  );
}
