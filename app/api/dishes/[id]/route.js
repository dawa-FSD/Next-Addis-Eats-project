// import dishes from "../../data/dishes";

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const query = (searchParams.get("q") || "").trim().toLowerCase();
//   const category = searchParams.get("category") || "All";
//   const page = Math.max(
//     1,
//     Number.parseInt(searchParams.get("page") || "1", 10) || 1,
//   );
//   const limit = Math.min(
//     50,
//     Math.max(1, Number.parseInt(searchParams.get("limit") || "8", 10) || 8),
//   );

//   const filtered = dishes.filter((dish) => {
//     const matchesQuery = `${dish.name} ${dish.category} ${dish.description}`
//       .toLowerCase()
//       .includes(query);
//     return matchesQuery && (category === "All" || dish.category === category);
//   });

//   const total = filtered.length;
//   const pageCount = Math.max(1, Math.ceil(total / limit));
//   const safePage = Math.min(page, pageCount);
//   const results = filtered.slice((safePage - 1) * limit, safePage * limit);

//   return Response.json({
//     success: true,
//     dishes: results,
//     pagination: { page: safePage, limit, total, pageCount },
//   });
// }
