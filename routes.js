const routes = require("next-routes");

// primeiro parametro o caminho da rota, e o segundo o nome do arquivo que temos dentro do pages
module.exports = routes()
  .add("/", "index")
  .add("/users", "users")
  .add("/users/:user", "detail");
