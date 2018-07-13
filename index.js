const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const api = require('./server/routes/api');

const port = process.env.PORT || 3000;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
}

//Middleware for CORS
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
});

app.listen(port, function () {
  console.log('Server running on localhost:' + port);
});
