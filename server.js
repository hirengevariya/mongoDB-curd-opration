const http = require('http');
const express = require ("express");
const app = express();

app.set('port', process.env.PORT || 8000);

app.use(require('./src/app'));

http.createServer(app).listen(8000);
console.log('Listing port 8000');