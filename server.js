require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.API_PORT;

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`Voicemeeter api listening on port ${port}`)
})