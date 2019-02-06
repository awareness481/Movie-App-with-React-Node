const key = require('../config/keys').imdbAPI;
const axios = require('axios');

module.exports = app => {
  app.get('/api/query/:input', async (req, res) => {
    console.log(req.params.input);
    const movies = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${req.params.input}`)
      .then(res => res.data)
      .catch(e => {
        console.log(e);
      })
    console.log(movies)

    res.send(movies);
  })
};