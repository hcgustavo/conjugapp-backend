const express = require('express');
const app = express();

const questions = require('./questions');

let port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get('/api/questions', (req, res, next) => {
    res.header({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }).status(200).json(questions);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})