const fs = require('fs');
const express = require('express');
const path = require ('path');
const db = require('./Develop/db/db.json')

const PORT = 3001;
const app = express();

app.use(express.static('public'));

//middleware code
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// route to home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// route to notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

//route of * should return index.html 
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//route to return to read and return db.json files
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../'))
})
