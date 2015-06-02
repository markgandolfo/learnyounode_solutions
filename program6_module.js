var fs = require('fs')

module.exports = function(directory, extension, callback) {
  var filteredList = new Array

  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err)
    }

    for(var i = 0; i < list.length; i++) {
      if(list[i].indexOf('.' + extension) > 0) {
        filteredList.push(list[i])
      }
    }

    return callback(null, filteredList)
  })

}

