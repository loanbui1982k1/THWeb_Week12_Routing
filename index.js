const express = require('express')
const app = express()
const path = require('path')
const route = require('./routes');

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'views')))
route(app);

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})