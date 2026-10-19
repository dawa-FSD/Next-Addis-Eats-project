// import Link from "next/link";
// import dishes from "../data/dishes";

// export const metadata = { title: "Dashboard | Addis Eats" };

// export default function DashboardPage() {
//   return (
//     <section className="page-section container">
//       <div className="page-heading compact-heading">
//         <span className="eyebrow">DEMO ADMIN AREA</span>
//         <h1>
//           Menu <em>overview.</em>
//         </h1>
//         <p>
//           This dashboard is a demonstration only and is not protected by
//           authentication.
//         </p>
//       </div>
//       <div className="dashboard-stats">
//         <article className="panel">
//           <span>Menu items</span>
//           <strong>{dishes.length}</strong>
//         </article>
//         <article className="panel">
//           <span>Categories</span>
//           <strong>{new Set(dishes.map((dish) => dish.category)).size}</strong>
//         </article>
//         <article className="panel">
//           <span>Featured dishes</span>
//           <strong>{dishes.filter((dish) => dish.featured).length}</strong>
//         </article>
//       </div>
//       <div className="panel dashboard-list">
//         <h2>Current menu</h2>
//         {dishes.map((dish) => (
//           <div className="summary-row" key={dish.id}>
//             <span>
//               {dish.name} <small>· {dish.category}</small>
//             </span>
//             <strong>ETB {dish.price.toLocaleString()}</strong>
//           </div>
//         ))}
//         <Link className="button button-outline" href="/menu">
//           View public menu
//         </Link>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import dishes from "../data/dishes";

export const metadata = {
  title: "Admin Dashboard | Addis Eats",
  description: "Manage the Addis Eats menu overview.",
};

export default function DashboardPage() {
  const categories = new Set(dishes.map((dish) => dish.category)).size;
  const featuredDishes = dishes.filter((dish) => dish.featured).length;

  return (
    <section className="page-section container admin-dashboard">
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">ADDIS EATS MANAGEMENT</span>
          <h1>
            Admin <em>Dashboard</em>
          </h1>
          <p>Welcome back! Here is an overview of your restaurant menu.</p>
        </div>

        <Link href="/menu" className="button button-primary">
          View Website →
        </Link>
      </div>

      <div className="dashboard-stats">
        <article className="panel dashboard-stat-card">
          <div className="dashboard-stat-icon">🍽️</div>
          <span>Total Menu Items</span>
          <strong>{dishes.length}</strong>
          <small>Available dishes in your menu</small>
        </article>

        <article className="panel dashboard-stat-card">
          <div className="dashboard-stat-icon">📂</div>
          <span>Food Categories</span>
          <strong>{categories}</strong>
          <small>Categories in your menu</small>
        </article>

        <article className="panel dashboard-stat-card">
          <div className="dashboard-stat-icon">⭐</div>
          <span>Featured Dishes</span>
          <strong>{featuredDishes}</strong>
          <small>Special dishes highlighted</small>
        </article>
      </div>

      <div className="dashboard-content-grid">
        <section className="panel dashboard-list">
          <div className="dashboard-section-heading">
            <div>
              <h2>Current Menu</h2>
              <p>Review your available food items and prices.</p>
            </div>

            <Link href="/menu" className="dashboard-text-link">
              View all →
            </Link>
          </div>

          <div className="dashboard-table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Food Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {dishes.map((dish) => (
                  <tr key={dish.id}>
                    <td className="dashboard-dish-name">{dish.name}</td>
                    <td>{dish.category}</td>
                    <td>ETB {dish.price.toLocaleString()}</td>
                    <td>
                      <span className="dashboard-status">Available</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="panel dashboard-quick-actions">
          <h2>Quick Actions</h2>
          <p>Navigate to important areas of your website.</p>

          <Link href="/menu" className="dashboard-action-link">
            <span>🍴</span>
            <div>
              <strong>Browse Menu</strong>
              <small>Explore all available dishes</small>
            </div>
            <span className="dashboard-action-arrow">→</span>
          </Link>

          <Link href="/cart" className="dashboard-action-link">
            <span>🛒</span>
            <div>
              <strong>Shopping Cart</strong>
              <small>Review selected food items</small>
            </div>
            <span className="dashboard-action-arrow">→</span>
          </Link>

          <Link href="/checkout" className="dashboard-action-link">
            <span>📦</span>
            <div>
              <strong>Checkout</strong>
              <small>Continue to order checkout</small>
            </div>
            <span className="dashboard-action-arrow">→</span>
          </Link>

          <div className="dashboard-notice">
            <span>ℹ️</span>
            <p>
              This is a menu overview demo. Order management and protected
              administrator access have not been implemented yet.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
