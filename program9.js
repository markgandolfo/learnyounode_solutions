var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var output = []
var count = 0

for(var i = 0; i < urls.length; i++) {
  get(urls[i], i)
}


function get(url, i) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      output[i] = data.toString();
      count++
    }))

    response.on('end', function() {
      if(count == 3)
        printOutput()
    })
  })
}

function printOutput() {
  for(var i = 0; i < 3; i++){
    console.log(output[i])
  }
}