const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const productRouters = require('./routes/product-routers');
const imageRouters = require('./routes/image-routers');

const userDB = 'emikbemik';
const passwordDB = 'k8GZvkmaZbhVQJ7x';

const URL__T0__DB = `mongodb+srv://${userDB}:${passwordDB}@cluster0.f6hpu31.mongodb.net/Store_Template`;


const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(productRouters);
app.use(imageRouters);

mongoose
  .connect(URL__T0__DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});




// app.use('/products/pizzas', require("./routes/products/pizza/index"));
// app.use('/products/desserts', require("./routes/products/desserts/index"));
// app.use('/products/drinks', require("./routes/products/drinks/index"));
// app.use('/products/sideDishes', require("./routes/products/sideDishes/index"));
// app.use('/products/', require("./routes/products/allMenu/index"));

// app.use('/products', require("./routes/products/index"));





  // Для отримання данних по id
//   router.get('/products/:id', (req, res) => {
//     Product
//     .findById((req.params.id))
//     .then((product) => {
//       res
//       .status(200)
//       .json(product);
//     })
//     .catch(() => handlerError(res, "Something goes wrong..."));
// });

// Для видалення данних
// router.delete('/orders/:id', (req, res) => {
//     Product
//     .findByIdAndDelete((req.params.id))
//     .then((result) => {
//       res
//       .status(200)
//       .json(result);
//     })
//     .catch(() => handlerError(res, "Something goes wrong..."));
// });

// Для створення нового елемента в колекції
// router.post('/orders', (req, res) => {
//   const order = new Order(req.body);

//   order
//   .save()
//   .then((result) => {
//     res
//     .status(201)
//     .json(result);
//   })
//   .catch(() => handlerError(res, "Something goes wrong..."));
// })

// Для зміни данних 
// router.patch('/products/:id', (req, res) => {
//     Product
//     .findByIdAndUpdate(req.params.id, req.body)
//     .then((result) => {
//       res
//       .status(200)
//       .json(result);
//     })
//     .catch(() => handlerError(res, "Something goes wrong..."));
// });