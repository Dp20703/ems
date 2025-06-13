const http = require('http');
const app = require("./app");
const port = process.env.PORT || 8000;
const connectDb = require("./config/db.connect");
connectDb();


const server = http.createServer(app);


server.listen(port, () => console.log(`http://localhost:${port}`));