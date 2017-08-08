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
  .help()
  .alias('help', 'h')
  .argv;

const address = encodeURIComponent(argv.address);

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`

request({
  url,
  json: true,
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect.. It\'s us, not you!');
  } if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address..')
  } if (body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude:
    ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude:
    ${body.results[0].geometry.location.lng}`);
  }
});
