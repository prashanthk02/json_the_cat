const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('breed not found', null);
    }
    if (error) {
      callback(error, null);
    }
    if (data.length !== 0) {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };