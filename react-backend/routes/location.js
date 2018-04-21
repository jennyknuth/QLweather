var express = require('express');
var router = express.Router();
var axios = require('axios');
var getCoords = require('city-to-coords');

/* GET /location/city info */
router.get('/:city', function(req, res, next) {
  getCoords(req.params.city)
    .then((coords) => {
      res.json(coords);
    });
});

module.exports = router;
