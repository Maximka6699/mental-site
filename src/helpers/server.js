const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/save-order', (req, res) => {
  const orderData = req.body;
  const filePath = path.join(__dirname, 'orders.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const orders = JSON.parse(data || '[]');
    const orderId = orders.length ? orders[orders.length - 1].orderId + 1 : 1; // Генерация уникального номера заказа

    const newOrder = {
      orderId,
      email: orderData.email,
      phone: orderData.phone,
      address: orderData.address,
      promoCode: orderData.promoCode,
      shopCounts: orderData.shopCount,
    };

    orders.push(newOrder);

    fs.writeFile(filePath, JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }

      res.status(200).json({ message: 'Order saved', orderId }); // Возвращаем JSON
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
