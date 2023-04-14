var fs = require("fs");

fs.readdir('.', function(err, files){
    if (err) {
        throw err;
    }

    for(var file in files) {
        console.log(files[file]);
    }
})