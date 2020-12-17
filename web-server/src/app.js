const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
    
    const address = req.query.address
    if (!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        })
       
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {    //Object destructuring with func args
        if (error) {
            return res.send({ error })      //error:error; //Object property shorthand
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })      //error:error; //Object property shorthand
            }
            res.send({
                location,       //Object property shorthand
                address: req.query.address,
                forecast: forecastData
            })
        
        })
   
    })
})

app.get('/products', (req, res) => {
    //console.log(req.query);

    if (!req.query.search) {
        return res.send({
             error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
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