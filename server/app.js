const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 8000;
let db;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.use('/products/pizzas', require("./routes/products/pizza/index"));
app.use('/products/desserts', require("./routes/products/desserts/index"));
app.use('/products/drinks', require("./routes/products/drinks/index"));
app.use('/products/sideDishes', require("./routes/products/sideDishes/index"));
app.use('/products/', require("./routes/products/allMenu/index"));

connectToDb((err) => {
  if(!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Server running on port ${PORT}`);
    });
    db = getDb();
  } 
  else {
    console.log(`DB connection error: ${err}`);
  } 
})

