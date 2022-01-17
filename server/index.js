const express = require('express');
const CORS = require('cors');

const app = express();
const PORT = process.env || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (res, req) => {
    res.send("Hello world");
});

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}!`));