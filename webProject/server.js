console.log('WebServer Starting...');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(bodyParser.json());//adding support for incoming JSON entities

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}); //deliver the app`s home page to browser clients

app.get('/api/items', (req,res) => {
    res.json({message: 'Fetch all items'});
});//get all

app.get('/api/items/:itemId', (req,res) => {
    res.json({message: `get user with identifier: ${req.params.id}`});
}); //get one

//add new
app.get('/api/items/:itemId', (req,res) => {
   //MUST return HTTP201
    res.status(201).json({message: `added a new item: ${req.body.firstName} ${req.body.lastName}`});
});//this route expects a JSON object in the body, e.g. {"firstName": "Yunus", "lastName": "Gumus"}

//edit existing
app.put('/api/items/:id', (req,res) => {
    res.json({
        message: `updated item with identifier: ${req.params.id} to ${req.body.firstName} ${req.body.lastName}`,
    });
});//this one expects a JSON object in the body like this {"id": 123, ""}
//https://webprogrammingforappsandservices.sdds.ca/Introduction/creating-testing-web-service

