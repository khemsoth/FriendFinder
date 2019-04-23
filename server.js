var express = require('express');
var app = express();
var port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);



app.listen(port, function() {
  console.log('App listening on port ' + port);
});

