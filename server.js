const fs = require('fs');
const express = require('express');
const path = require ('path');
const db = require('./Develop/db/db.json')
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

//middleware code
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// route to home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
});

// route to notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
});

//route of * should return index.html 
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'));
});

//route to return to read and return db.json files
app.get('/api/notes', (req,res) => {
    fs.readFile('./db/db.json', 'uft8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
        }
        res.json(parsedNotes)
    });
});

//post request to save new note to db.json and return the note

app.post('api/notes', (req,res) => {
    const { title , text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newTip, './db/db.json');
        res.json(`Note added`);
    } else {
        res.error('error in adding note');
    }
});



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}` ));










