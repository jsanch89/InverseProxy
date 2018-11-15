const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'

function serve(id, port, status){
    console.log('index'+ id+ ".html");
    fs.readFile('./index' + id + ".html", function(err, html){
        if(err){
            throw err;
        }
        http.createServer(function(req, res){
            res.writeHead(status, {'Content-Type': 'text/html'});
            res.write(html);
            res.write('<center><h1> Listening on port ' + port + '</h1></center>');
            res.end();
        }).listen(port);
    });
}

serve(1, 8081, 200);
serve(2, 8082, 200);
serve(3, 8083, 200);
//serve(4, 8084);