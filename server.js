const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('dbJsonCoffee.json');
// const router2 = jsonServer.router('dbtest.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
// server.use(router2);

server.listen(port);