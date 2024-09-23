/* Hello, World! program in node.js */
console.log("Hello, World!")

/* create server*/
var http = require('http');
http.createServer(function (request, reponse) {
  reponse.writeHead(200, { 'Content-Type': 'text/plain' });
  reponse.end('Hello Node\n');
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

/* create ficher texte*/
var fs = require('fs');
var data = fs.readFileSync('welcome.txt');

console.log(data.toString());
console.log("Program Ended");