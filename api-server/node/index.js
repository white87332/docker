const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const connect = require('mongodb').MongoClient.connect;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/1', (req, res) => {

    connect('mongodb://mongodb:27017/database', { useNewUrlParser: true })
    .then(async (db) => {
        // const collection = db.collection('test');
        console.log(db);
        // const res = await collection.insertOne({name: "test", age: 19});
        // const result = await collection.find({}).toArray();
        // console.log(result);
        // db.close();
    },
    (err)=>{
        console.log("db connection error")
        throw err;
    });

    // res.json({
    //     status: 0,
    //     error: false,
    //     data: []
    // })
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
