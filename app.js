const request = require('request');
const yargs = require('yargs');

//Object that stores the final parsed output
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Via%20della%20Lungara,%20233,%2000165%20Roma%20RM,%20Italy'
request({
  url,
  json: true,
}, (error, response, body) => {
   console.log(`Address: ${body.results[0].formatted_address}`);
   console.log(`Latitude:
   ${body.results[0].geometry.location.lat}`);
   console.log(`Longitude:
   ${body.results[0].geometry.location.lng}`);
});
