const express = require('express');
const router  = express.Router();

const request = require('request');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/users', (req, res, next) => {
  res.json(
    [
      { id: 1, username: 'Guss' },
      { id: 2, username: 'John' },
      { id: 3, username: 'Angela' }
    ]
  );
});

router.get('/chuck', (req, res, next) => {

  const options = {
    url: 'https://api.chucknorris.io/jokes/random',
    method: 'get',
  };

  request.get(options, (err, response, joke) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(joke);
    res.json(joke);
  });
});

module.exports = router;
