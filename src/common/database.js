const mongoose = require("mongoose");
const config = require("config");

const databaseConfig = config.get("database");

const createDBconnection = () => {
  return new Promise((resolve, reject) => {
    const connectionLink = `mongodb://${databaseConfig.host}:${
      databaseConfig.port
    }/${databaseConfig.database}`;
    mongoose.connect(connectionLink, () => {
      console.log("database connected");
      resolve(true);
    });
    mongoose.Promise = global.Promise;
  }).catch(err => {
    console.error(err.stack);
  });
};

module.exports = {
  createDBconnection
};
