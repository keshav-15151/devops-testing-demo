const express = require('express');
const { createOrder, getOrderById } = require('../orderService');

const router = express.Router();

router.post('/orders', (req, res) => {
  const { customerName, items } = req.body;
  if (!customerName || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const order = createOrder(customerName, items);
  res.status(201).json(order);
});

router.get('/orders/:id', (req, res) => {
  const order = getOrderById(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

module.exports = router;
