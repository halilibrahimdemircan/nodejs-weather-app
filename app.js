const request = require("postman-request");

// const url =
//   "http://api.weatherstack.com/current?access_key=00bcfb6cd68510513ae317ddc37a798e&query=37.8267,-122.4233";

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   //   console.log(data.current);
//   const temperature = data.current.temperature;
//   const feelslike = data.current.feelslike;
//   const print = `It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`;
//   console.log(print);
// });

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFsaWxpYnJhaGltZCIsImEiOiJja3k4em85dmkwMXBrMm9sN2k1cWoyYjRoIn0.3gDzYPBHzC00iZslUCivHg&limit=1";

request({ url: url2 }, (error, response) => {
  //   console.log(JSON.parse(response.body));
  const data = JSON.parse(response.body.features[0]);
  console.log(data.center[0]);
  //   console.log("Latitude: " + data.center[0] + "Longitude: " + data.center[1]);
});
