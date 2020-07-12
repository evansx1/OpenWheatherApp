const express = require('express');
const locationRoutes = require("./routes/location");

const app = express();

app.use('/v1', locationRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));