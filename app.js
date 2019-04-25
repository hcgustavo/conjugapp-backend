const express = require('express');
const app = express();

const questions = require('./questions');

app.get('/', (req, res, next) => {
    res.send(`
    <p>ConjugApp API</p>
    `);
});

app.get('/api/questions', (req, res, next) => {
    res.json(questions);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})