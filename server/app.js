const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/products/pizzas', require("./routes/products/pizza/index"))
app.use('/products/desserts', require("./routes/products/desserts/index"))
app.use('/products/drinks', require("./routes/products/drinks/index"))
app.use('/products/sideDishes', require("./routes/products/sideDishes/index"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


