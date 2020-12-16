const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views'); 
const partialsPath = path.join(__dirname, '../templates/partials');   //Setting up new path to views after renaming views directory to templates

//Set up handlebar engine and views location
app.set('view engine', 'hbs');   
app.set('views', viewsPath);  
hbs.registerPartials(partialsPath);

//Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {  
    res.render('index', {
        title: 'Weather App',
        name: 'Angel'
    })   
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Angel'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Angel'
    });
})


app.get('/weather', (req, res) => { //Json array of objs as res
    res.send([
        {
            forecast: '50 degrees out',
            location : 'Dublin'
        },
        {
            forecast: '10 degrees out',
            location : 'India'
        }
    ])
})

app.get('/help/*', (req, res) => {  //specific 404 related to help documentation
    res.render('404', {
        title: '404',
        name: 'Angel',
        errorMessage: 'Help article not found'
    })
}) 

app.get('*', (req, res) => {   //generic 404 pages    
    res.render('404', {
        title: '404',
        name: 'Angel',
        errorMessage: 'Page not found'
    })
}) 

app.listen(3000, () => {        
    console.log("Server is up on port 3000");
})