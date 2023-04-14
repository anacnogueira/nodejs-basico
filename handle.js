function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<body>');
    response.write('<head>');
    response.write('<title>Http Module</title>');
    response.write('</head>');
    response.write('<h1>Hello Ana</h1>');
    response.write('<body>');
    response.write('</html>');
    response.end();
}

module.exports = handle;