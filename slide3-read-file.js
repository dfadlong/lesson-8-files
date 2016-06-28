var fs = require('fs');
fs.readFile('files/animals.txt', function(err, data) {
  console.log(data);
});