var fs = require('fs')
var myModule = require('./program6_module.js')

var directory = process.argv[2]
var fileExtension = process.argv[3]

myModule(directory, fileExtension, function(err, data) {
  if(err) {
    console.log(err)
    exit
  }

  data.forEach(function(item) {
    console.log(item)
  })
})

