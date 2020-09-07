'use strict';

const express = require('express');
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world')
});

app.listen(PORT, () => console.log('listening on port ' + PORT));
