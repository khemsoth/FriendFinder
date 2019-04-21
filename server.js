const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./app/routing/htmlRoutes');
require('./app/routing/apiRoutes');

app.listen(port, function() {
  console.log('App listening on port ' + port);
});

