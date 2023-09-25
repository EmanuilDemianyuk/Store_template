const express = require('express');
const cors = require('cors');

// const router = require("../...")

const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// app.use('/products/...', name)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


