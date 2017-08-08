const request = require('request');

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Via%20della%20Lungara,%20233,%2000165%20Roma%20RM,%20Italy'
request({
  url
}, (error, response, body) => {
   console.log(body);
})
