const path = require('path');
const express = require('express');

const app = express();

//console.log(__dirname);
//console.log(__filename);

app.set('view engine', 'hbs'); //Setting up the template handlebar to express
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));  // cpnfiguring express to server up from a static directory


app.get('', (req, res) => {  
    app.render('index', {
        title: 'Weather App',
        name: 'Angel'
    })   
})
app.get('', (req,res) => {  //Route handler
    res.send('Hello Express!');
})

/* app.get('/help', (req, res) => {  //Rendering HTML as res
    res.send('<h1>Help Page</h1>')
}) 

app.get('/about', (req, res) => {   //Json obj as res
    res.send({
        name: 'Angel',
        age: 27
    });
})  */

app.get('/weather', (req, res) => { //Json array of objs as res
    res.send([{
        forecast: '50 degrees out',
        location : 'Dublin'
    },
    {
        forecast: '10 degrees out',
        location : 'India'
    }
])
})

/* app.get('/view', (req, res) => {
    res.send('<h1>Weather</h1>');
}) */

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})