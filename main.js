var http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('boop the snoot')
}).listen(8080)
