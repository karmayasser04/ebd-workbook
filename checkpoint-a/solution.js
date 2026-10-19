
import { findOrderById, findAllOrders } from "./orders-db.js";

// 1. Return every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Keep orders that are both from Cairo and cancelled.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "cancelled"
  );
}

// 3. Calculate total revenue: price per item × quantity.
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Describe an order, handling missing IDs without throwing.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

// 5. Keep only student and item, then convert the array to JSON text.
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));

  return JSON.stringify(simplifiedOrders);
}
