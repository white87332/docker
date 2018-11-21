const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/1', (req, res) => {
    res.json({
        status: 0,
        error: false,
        data: []
    })
});

app.get('/api/2', (req, res) => {
    res.json({
        status: 0,
        error: false,
        data: []
    })
});

app.get('/api/3', (req, res) => {
    res.json({
        status: 0,
        error: false,
        data: []
    })
});

// http
const server = http.createServer(app).listen(port, () => {
    if (process.env.NODE_ENV === 'development')
    {
        server.keepAliveTimeout = 0;
    }
    /* eslint no-console: ["error", { allow: ["info"] }] */
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
