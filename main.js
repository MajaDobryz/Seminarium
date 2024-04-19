const http = require('http')

const server = http.createServer(onRequest)

function onRequest(req, res) {
  if (req.url === '/') {
    return getBase(req, res)
  } else if (req.url === '/boop') {
    return getBoop(req, res)
  }

  res.writeHead(404, {'Content-Type': 'text/plain'})
  res.end('not found')
}

function getBase(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello')
}

function getBoop(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('boop the snoot')
}

server.listen(8080)
