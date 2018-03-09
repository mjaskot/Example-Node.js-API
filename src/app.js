const express = require("express");
const bodyParser = require("body-parser");

const { createDBconnection } = require("./common/database");

process.on("unhandledRejection", function(reason, p) {
  console.log(reason);
});
async function bootstrap() {
  const app = express();
  const { createPlanetRouter } = require("./planets/planets.router");

  await createDBconnection();

  app.use(bodyParser.json());
  app.use(createPlanetRouter());

  app.listen(3000, () => console.log("Example app listening on port 3000!"));
}

module.exports = {
  bootstrap
};
