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
    fs.readFile('./db/db.json', 'uft8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
        }
        res.json(parsedNotes)
    });
});




app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}` ));







fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      // return res.status(500).json('Error in posting review');
    } else {
      // Convert string into JSON object
      const parsedReviews = JSON.parse(data);

      // Add a new review
      parsedReviews.push(newReview);

      currentReviews.push(newReview)

      // Write updated reviews back to the file
      fs.writeFile(
        './db/reviews.json',
        JSON.stringify(parsedReviews, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully updated reviews!')
      );
    }
  });


