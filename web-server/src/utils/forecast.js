const request = require('request');

const forecast = (latitude, longitude, callback) =>{
    
    const url = 'http://api.weatherstack.com/current?access_key=54c22d81195649f4a1627fb5bd8d61c7&query=' + latitude +','+ longitude +'&units=f'
    
     /* request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the location services!', undefined) //undefined is optional, if not provided, javascript will assign undefined by default
        } else if(response.body.error) {
            callback('Unable to find the search location. Try another search');
        } else {
            callback(undefined, response.body.current.weather_descriptions+". It is currently "+ response.body.current.temperature+ " degrees out. There is a " + response.body.current.precip + "% chance of rain")
        }
    }) */

    request({url, json:true}, (error, {body}) => { //Object shorhand ; url, Object destructuring on response
        if (error) {
            callback('Unable to connect to the location services!', undefined) //undefined is optional, if not provided, javascript will assign undefined by default
        } else if(body.error) {
            callback('Unable to find the search location. Try another search');
        } else {
            callback(undefined, body.current.weather_descriptions+". It is currently "+ body.current.temperature+ " degrees out. There is a " + body.current.precip + "% chance of rain")
        }
    })

}

module.exports = forecast;