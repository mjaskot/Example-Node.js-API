module.exports = {
  authorization: {
    secret: "super-secret-secret"
  },

  app: {
    mountPath: "",
    versions: ["v1"]
  },

  authorization: {
    secret: "thisnotasecret",
    requestProperty: "auth",
    tokenTTL: 900,
    refreshTTL: 10800
  },

  logger: {
    console: {
      enabled: true,
      colorize: true,
      humanReadableUnhandledException: true,
      level: "silly",
      stderrLevels: ["error"],
      timestamp: true
    }
  },

  server: {
    port: 4000
  },

  database: {
    host: "localhost",
    port: 27017,
    database: "universe"
  }
};
