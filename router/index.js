'use strict';

const path = require('path');
const st = require('st');

const mount = st({
  cache : false,
  path : path.join(__dirname, '..', 'public'),
  index : 'index.html',
  passthrouht: true
});

function onRequest(req,res) {
  mount(req, res, function (err) {
    if(err) return fail(err , res);
  });
}
function fail(err,res) {
  res.statusCode = 500;
  res.setHeader('Content-Type','text/plain');
  res.end(err.message);
}

module.exports = onRequest;
