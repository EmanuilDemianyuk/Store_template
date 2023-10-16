const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const productRouters = require('./routes/product-routers');
const imageRouters = require('./routes/image-routers');

const userDB = '';
const passwordDB = '';

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
