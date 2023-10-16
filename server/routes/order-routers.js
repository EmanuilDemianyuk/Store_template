


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