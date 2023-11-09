const express = require('express');
const cors = require('cors');
require('dotenv').config();


const mongoose = require('mongoose');
const productRouters = require('./routes/product-routers');
const imageRouters = require('./routes/image-routers');
const userRouters = require('./routes/user-routers');


const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors(
  {
    origin: ["https://store-template-dusky.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
  }
));
// app.use(cors());

app.use(productRouters);
app.use(imageRouters);
app.use(userRouters);

mongoose
  .connect(process.env.URL_KEY_PASS_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
