let orders = [];
let orderId = 1;

function createOrder(customerName, items) {
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = { id: orderId++, customerName, items, totalAmount };
  orders.push(order);
  return order;
}

function getOrderById(id) {
  return orders.find(order => order.id === parseInt(id));
}

function resetOrders() {
  orders = [];
  orderId = 1;
}

module.exports = { createOrder, getOrderById, resetOrders };
