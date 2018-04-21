require('dotenv').config();
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET api */
router.get('/api/weather', function(req, res, next) {
  var baseUrl = 'https://api.darksky.net';
  const forecastUrl = baseUrl + '/forecast/' + process.env.API_KEY + '/37.8267,-122.4233';
  console.log('forecastURL', forecastUrl);
  // res.render('index', { title: 'Express' });
  axios.get(forecastUrl)
    .then(response => res.json(response.data))
    .catch(error => error);
});

module.exports = router;
