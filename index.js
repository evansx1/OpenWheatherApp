const express = require('express');
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/location");

const cors = require("cors");
const app = express();

//API configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/v1', locationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));