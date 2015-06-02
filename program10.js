var net = require('net')

function pad(number) {
  return ("0" + number).slice(-2)
}

var server = net.createServer(function (socket) {
  var date = new Date();
  socket.write(
    date.getFullYear() + "-" +
    pad(date.getMonth() + 1) + "-" +
    pad(date.getDate()) + " " +
    date.getHours() + ":" +
    date.getMinutes() + "\n"
  )
  socket.end()
})

server.listen(process.argv[2])

