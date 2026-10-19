import dishes from "../../data/dishes";

let orders = [];

export async function GET() {
  return Response.json({ success: true, orders });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { customer, items, payment } = body || {};
    const errors = {};

    if (
      !customer ||
      typeof customer.name !== "string" ||
      customer.name.trim().length < 2
    ) {
      errors.name = "Please enter a valid full name.";
    }
    if (
      !customer ||
      typeof customer.phone !== "string" ||
      !/^09\d{8}$/.test(customer.phone.trim())
    ) {
      errors.phone = "Enter a valid Ethiopian phone number beginning with 09.";
    }
    if (
      !customer ||
      typeof customer.address !== "string" ||
      customer.address.trim().length < 5
    ) {
      errors.address = "Please enter a complete delivery address.";
    }
    if (!Array.isArray(items) || items.length === 0) {
      errors.items = "Your order must contain at least one item.";
    }
    if (!["Cash on Delivery", "TeleBirr"].includes(payment)) {
      errors.payment = "Please select a valid payment method.";
    }

    if (Object.keys(errors).length) {
      return Response.json(
        {
          success: false,
          message: "Please correct the submitted information.",
          errors,
        },
        { status: 422 },
      );
    }

    const validatedItems = [];
    for (const item of items) {
      if (
        !item ||
        typeof item.id !== "string" ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1 ||
        item.quantity > 99
      ) {
        return Response.json(
          { success: false, message: "An item or quantity is invalid." },
          { status: 422 },
        );
      }
      const dish = dishes.find((entry) => entry.id === item.id);
      if (!dish) {
        return Response.json(
          { success: false, message: `Dish "${item.id}" is not available.` },
          { status: 422 },
        );
      }
      validatedItems.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image,
        quantity: item.quantity,
      });
    }

    const total = validatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const order = {
      id: `AE-${Date.now()}`,
      customer: {
        name: customer.name.trim(),
        phone: customer.phone.trim(),
        address: customer.address.trim(),
      },
      items: validatedItems,
      payment,
      total,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    orders.push(order);
    return Response.json(
      { success: true, message: "Order created successfully.", order },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }
}
