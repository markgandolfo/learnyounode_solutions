var http  = require('http')
var fs    = require('fs')

server = http.createServer(function(request, response) {
  fileReadStream = fs.createReadStream(process.argv[3])

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  fileReadStream.pipe(response)
})

server.listen(process.argv[2])
