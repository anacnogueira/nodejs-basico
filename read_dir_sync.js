var fs = require("fs");

fs.readdirSync('.')
    .filter(function(file){
        return (file.endsWith('.js'))
    })
    .forEach(function(file){
        console.log(file)
    })