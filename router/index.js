//'use strict';

const path = require('path');
const url = require('url');
const fs = require('fs');
var  a = 0;
function onRequest(req,res) {
  if (req.url.startsWith('/socket.io')) return;
  var uri = path.join(__dirname, '..', 'public',url.parse(req.url).pathname);
  fs.access(uri, function(err) {
    if(err){
      notFound(res);
      return;
    }
    if(fs.lstatSync(uri).isDirectory()){
      console.log('index');
      uri += '/index.html';
    }
    if(fs.lstatSync(uri).isFile()){
      fs.readFile(uri, "binary", function(err, file) {
        if(err) {
          return fail(err , res);
        }
        res.writeHead(200);
        res.write(file, "binary");
        res.end();
      });
    }else{
      notFound(res);
      return;
    }
  });

}

function notFound(res) {
  res.writeHead(404, {"Content-Type": "text/plain"});

  res.write("404 Not Found\n");
  res.end();
}
function fail(err,res) {
  res.statusCode = 500;
  res.setHeader('Content-Type','text/plain');
  res.end(err.message);
}

module.exports = onRequest;
