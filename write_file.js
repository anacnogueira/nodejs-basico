var fs = require("fs");

fs.writeFile('data.txt', 'Hello World from Ana', function(err){
    if (err) {
        throw err;
    }
});