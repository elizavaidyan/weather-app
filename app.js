const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


/*const url = 'http://api.weatherstack.com/current?access_key=54c22d81195649f4a1627fb5bd8d61c7&query=37.8267,-122.4233&units=f'

request({url :url, json : true}, (error, response) => { // request API allows us to take the lat long and convert that into a weather forecast.;So the user gives us an address and they get back the weather for that location.

   
//   console.log(response.body); //JSON

//     const data = JSON.parse(response.body); 
//     console.log(data.current);  //property exist in weather stack

//    console.log(response.body.current); //gives parsed json data  
   
   

   if(error) {
       console.log("Unable to connect to the weather service!");
   } else if (response.body.error) {
       console.log("Unable to find location")
   } else {
    console.log(response.body.current.weather_descriptions+". It is currently "+ response.body.current.temperature+ " degrees out. There is a " + response.body.current.precip + "% chance of rain");
   }
}) */
 
/*
 geocode('New York', (error, data) => {
    console.log('error', error);
    console.log('data', data)
})

forecast(-73.9808, 40.7648, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

 */ 

  const address = process.argv[2];

  if (!address) {
      console.log("Please provide an address");
  } else {
        //Callback chaining
       /* geocode(address, (error, data) => {
            if (error) {
                return console.log(error);
            }
        
            forecast(data.latitude, data.longitude, (error, forecastData) => {
            console.log(data.location)
            console.log(forecastData)
            })
        })
        */
       geocode(address, (error, {latitude, longitude, location} ) => { //Object destructuring with func args
        if (error) {
            return console.log(error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
        console.log(location)
        console.log(forecastData)
        })
    })
  }
