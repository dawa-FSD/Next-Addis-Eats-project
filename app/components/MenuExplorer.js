"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import DishCard from "./DishCard";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not load the menu.");
  return response.json();
};

const PAGE_SIZE = 8;

export default function MenuExplorer({ initialDishes = [] }) {
  const { data, error, isLoading } = useSWR("/api/dishes", fetcher, {
    fallbackData: { success: true, dishes: initialDishes },
    revalidateOnFocus: false,
  });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const dishes = data?.dishes || initialDishes;
  const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];

  const filtered = useMemo(
    () =>
      dishes.filter((dish) => {
        const matchesSearch =
          `${dish.name} ${dish.description} ${dish.category}`
            .toLowerCase()
            .includes(search.toLowerCase().trim());
        return (
          matchesSearch && (category === "All" || dish.category === category)
        );
      }),
    [dishes, search, category],
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visibleDishes = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  function updateSearch(value) {
    setSearch(value);
    setPage(1);
  }

  function updateCategory(value) {
    setCategory(value);
    setPage(1);
  }

  return (
    <>
      <section className="menu-controls">
        <label className="search-field">
          <span>Search menu</span>
          <input
            value={search}
            onChange={(event) => updateSearch(event.target.value)}
            placeholder="Search dishes, ingredients..."
          />
        </label>
        <label className="category-field">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => updateCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </section>
      {error && (
        <p className="notice notice-error">
          The menu could not refresh. Showing available menu data if present.
        </p>
      )}
      {isLoading && !data ? (
        <p className="empty-state">Loading the menu...</p>
      ) : visibleDishes.length ? (
        <div className="dish-grid">
          {visibleDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No dishes found</h3>
          <p>Try another search or category.</p>
        </div>
      )}
      {filtered.length > PAGE_SIZE && (
        <nav className="pagination" aria-label="Menu pages">
          <button
            className="button button-outline"
            disabled={page === 1}
            onClick={() => setPage((value) => value - 1)}
          >
            Previous
          </button>
          <span>
            Page {page} of {pageCount}
          </span>
          <button
            className="button button-outline"
            disabled={page === pageCount}
            onClick={() => setPage((value) => value + 1)}
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}
