// See https://github.com/typicode/json-server#module
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const jsonServer = require("json-server");

const server = jsonServer.create();

// Uncomment to allow write operations
// See https://github.com/typicode/json-server#module
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const fs = require("fs");
// See https://github.com/typicode/json-server#module
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require("path");
const filePath = path.join("db/db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

// Comment out to allow write operations
// const router = jsonServer.router("db/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(router);
server.listen(3500, () => {
  console.log("JSON Server is running");
});

// Export the Server API
// eslint-disable-next-line no-undef
module.exports = server;
