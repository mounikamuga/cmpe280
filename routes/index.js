
//var db = require('./db');
var util = require('util');
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Kutty1993',
  database : 'cmpe280',
  socketPath:'/tmp/mysql.sock'
});

connection.connect(function(err) {
  if(err){
	console.log('Not connected to db');
  }
});
//module.exports = connection;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

