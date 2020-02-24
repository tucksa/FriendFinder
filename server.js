const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

//set up express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the API routing coded
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen on production port or port 8080 for dev
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
