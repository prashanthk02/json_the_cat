const request = require('request');

const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?name=${arg[0]}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('breed not found');
  }
  if (error) {
    console.log(error);
  }
  if (data.length !== 0) {
    console.log(data[0].description);
  }
});