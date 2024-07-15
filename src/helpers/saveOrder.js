// const fs = require('fs');
// const path = require('path');

// // Путь к файлу orders.json
// const filePath = path.join(__dirname, 'orders.json');

// // Функция для сохранения данных в JSON-файл
// export const saveOrderToLocalFile = (orderData) => {
//   const formattedData = {
//     email: orderData.email,
//     phone: orderData.phone,
//     address: orderData.address,
//     promoCode: orderData.promoCode,
//   };

//   // Чтение существующего файла
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         // Если файл не существует, создаем его и записываем данные
//         fs.writeFile(filePath, JSON.stringify([formattedData], null, 2), (err) => {
//           if (err) throw err;
//           console.log('Order saved successfully.');
//         });
//       } else {
//         throw err;
//       }
//     } else {
//       // Если файл существует, парсим его и добавляем новые данные
//       const existingData = JSON.parse(data);
//       existingData.push(formattedData);

//       // Запись обновленных данных обратно в файл
//       fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
//         if (err) throw err;
//         console.log('Order saved successfully.');
//       });
//     }
//   });
// };

// // Пример использования функции
// // const orderData = {
// //   email: 'test@example.com',
// //   phone: '1234567890',
// //   address: '123 Test St, Test City',
// //   promoCode: 'PROMO123',
// // };

// // saveOrderToLocalFile(orderData);
