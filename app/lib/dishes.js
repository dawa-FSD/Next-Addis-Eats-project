import dishes from "../data/dishes";

export async function getDishes() {
  return dishes;
}

export async function getDishById(id) {
  return dishes.find((dish) => dish.id === id) || null;
}
