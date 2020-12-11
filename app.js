const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=54c22d81195649f4a1627fb5bd8d61c7&query=37.8267,-122.4233&units=f'

request({url :url, json : true}, (error, response) => { // request API allows us to take the lat long and convert that into a weather forecast.;So the user gives us an address and they get back the weather for that location.

   
    //console.log(response.body); //JSON

    // const data = JSON.parse(response.body); 
    // console.log(data.current);  //property exist in weather stack

   // console.log(response.body.current); //gives parsed json data

   console.log(response.body.current.weather_descriptions+". It is currently "+ response.body.current.temperature+ " degrees out. There is a " + response.body.current.precip + "% chance of rain");

})

 /* const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWxpemF2YWlkeWFuNDYiLCJhIjoiY2tpazkzNTMyMDdxNzMycWplaXlqcm12ayJ9.CLnyQ8K_mIkquF9kjjVnnw&limit=1'

request ({url:geocodeURL, json:true}, (error, response) => {    //  request API to convert an address into the lat long coordinate pair.
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];

    console.log(latitude, longitude);
}) */