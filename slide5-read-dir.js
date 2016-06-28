var fs = require('fs');
var path = require('path');

var directory = 'files';
fs.readdir(directory, function(err, files) {
	if (err) { throw err; }
	for (var k = 0; k < files.length; k++) {
		var filepath = path.join(directory, files[k]);
		fs.stat(filepath, function(err, stat) {
			if (err) { throw err; }
			console.log('File "' + filepath + '" size=' + stat.size);
		});
	}
});