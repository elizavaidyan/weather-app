const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=54c22d81195649f4a1627fb5bd8d61c7&query=40,-75&units=f' 

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => { //chunk of response is a buffer
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

    responseon('error' ,(error) => {
        console.log('An error', error);
    })
})



request.end();