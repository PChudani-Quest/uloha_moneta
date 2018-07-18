const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

  app.use(bodyParser.urlencoded({
      extended: true
  }));

  app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app);

app.listen(port);
