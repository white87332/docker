const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const dbObj = require('./db/dbObj');

const app = express();
const port = process.env.PORT || 3000;
dbObj.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', async (req, res) => {
    try
    {
        const result = await dbObj.select('test', {}, { skipNumber : 0, limitNumber : 20, sort : { _id : 1 }});

        res.json({
            status: true,
            data: result
        });
    }
    catch (e)
    {
        res.json({
            status: false,
            data: []
        });
    }
});

app.post('/api/post', async (req, res) => {
    try
    {
        const result = await dbObj.insert('test', req.body);

        res.json({
            status: true,
            data: result
        });
    }
    catch (e)
    {
        res.json({
            status: false,
            data: []
        });
    }
});

app.delete('/api/del/:id', async (req, res) => {
    const result = await dbObj.delete('test', req.params.id);

    if (!result)
    {
        res.json({
            status: false,
            data: []
        });
    }
    else
    {
        res.json({
            status: true,
            data: result
        });
    }
});

// app.put('/api/put', async (req, res) => {
//
//     const body = req.body;
//     const result = await dbObj.update('test', body, { age: 25 });
//
//     if (!result)
//     {
//         res.json({
//             status: false,
//             data: []
//         });
//     }
//     else
//     {
//         res.json({
//             status: true,
//             data: result
//         });
//     }
// });

// http
const server = http.createServer(app).listen(port, () => {
    if (process.env.NODE_ENV === 'development')
    {
        server.keepAliveTimeout = 0;
    }
    /* eslint no-console: ["error", { allow: ["info"] }] */
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
