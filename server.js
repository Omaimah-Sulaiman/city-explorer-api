'use strict';

const express = require('express');
const server = express();


require('dotenv').config();
const PORT = process.env.PORT;

const cors = require('cors');
server.use(cors());

const getWeather = require('./controller/Forecast.controller');




server.get('/', (req, res) => {
  res.send('Hello ');
});
server.get('/weather', getWeather);


server.listen(PORT, () => console.log(`listening on ${PORT}`));