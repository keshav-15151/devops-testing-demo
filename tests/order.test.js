const request = require('supertest');
const app = require('../app/server');
const { resetOrders } = require('../app/orderService');

beforeEach(resetOrders);

test('POST /api/orders should create order', async () => {
  const response = await request(app)
    .post('/api/orders')
    .send({
      customerName: "Charlie",
      items: [
        { name: "Taco", price: 3, quantity: 4 }
      ]
    });
  expect(response.statusCode).toBe(201);
  expect(response.body.totalAmount).toBe(12);
});

test('GET /api/orders/:id should fetch order', async () => {
  const post = await request(app)
    .post('/api/orders')
    .send({
      customerName: "Dave",
      items: [{ name: "Soda", price: 2, quantity: 3 }]
    });

  const id = post.body.id;
  const get = await request(app).get(`/api/orders/${id}`);
  expect(get.statusCode).toBe(200);
  expect(get.body.customerName).toBe("Dave");
});
