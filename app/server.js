const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());
app.use('/api', orderRoutes);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}
