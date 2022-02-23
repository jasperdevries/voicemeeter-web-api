require('dotenv').config();

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.API_PORT;

const soundExtensions = ['.wav', '.mp3'];

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send({
        success: true,
    });
});

app.get('/get-sounds', (req, res) => {
    const directory = process.env.SOUND_DIRECTORY;
    const files = fs.readdirSync(directory)
        .map(item => {
            if (soundExtensions.includes(path.extname(item))) {
                return item;
            }
        }).filter(item => item !== null && typeof item !== "undefined");

    res.contentType('application/json');
    res.send({
        success: true,
        files: files,
    });
});

app.listen(port, () => {
    console.log(`Voicemeeter api listening on port ${port}`)
})