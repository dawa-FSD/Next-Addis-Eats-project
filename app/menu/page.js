import MenuExplorer from "../components/MenuExplorer";
import dishes from "../data/dishes";

export const metadata = { title: "Menu | Addis Eats" };

export default function MenuPage() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">THE ADDIS EATS MENU</span>
        <h1>
          Find your <em>favorite.</em>
        </h1>
        <p>
          Traditional Ethiopian flavors and familiar favorites, made with care.
        </p>
      </div>
      <MenuExplorer initialDishes={dishes} />
    </section>
  );
}
