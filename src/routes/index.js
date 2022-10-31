const user = require("./user");

const initRoutes = (app) => {
  app.use("/api/v1/user", user);

  return app.use("/", (req, res) => {
    return res.send("SEVER ONNN");
  });
};

module.exports = initRoutes;
