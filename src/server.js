/*
 * This is the starting point for the app.
 */

const http = require('http');
const app = require('./index');

const port = process.env.PORT || 5000;
const server = createServer(app);

server.listen(port, hostname, function () {
	console.log(`Started on port ${port}`);
});
