var http = require('http')
var url  = require('url')

server = http.createServer(function(req, res) {
  var path  = url.parse(req.url, true)['pathname']
  var query = url.parse(req.url, true)['query']
  var result = ""

  if(path.match(/^\/api\/parsetime/, 'i')) {
    date = new Date(query.iso)
    result = dateToJson(date)
  } else if(path.match(/^\/api\/unixtime/, 'i')) {
    date = new Date(query.iso)
    result = dateToUnix(date)
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(result)
  res.end()
})
server.listen(process.argv[2])


function dateToUnix(date) {
  return JSON.stringify({
    unixtime: date.getTime()
  })
}

function dateToJson(date) {
  return JSON.stringify({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  })
}
