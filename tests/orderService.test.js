const { createOrder, getOrderById, resetOrders } = require('../app/orderService');

beforeEach(resetOrders);

test('createOrder should add a new order', () => {
  const order = createOrder("Alice", [
    { name: "Pizza", price: 10, quantity: 2 }
  ]);
  expect(order.totalAmount).toBe(20);
  expect(order.customerName).toBe("Alice");
});

test('getOrderById should return correct order', () => {
  const order = createOrder("Bob", [
    { name: "Burger", price: 5, quantity: 1 }
  ]);
  const found = getOrderById(order.id);
  expect(found).toEqual(order);
});
