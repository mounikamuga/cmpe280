/**
 * New node file
 */
var db = require('./db');
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


//Senddata
exports.senddata = function(req, res){
	  res.render('senddata', { title: 'Send data' });
	};

exports.create = function(req,res)
	{	
	var post = {text: req.body.text};
	connection.query('insert into test SET ?', post,function(err, rows, fields) {
			  if (!err)
			    console.log('No error while inserting data');
			  else
			    console.log('Error while performing Query.'+err);
			});
		
		res.redirect('/senddata');
	};
//Location data
	exports.loc = function(req, res){
		  res.render('loc', { title: 'Send data' });
		};
		
	exports.setloc = function(req, res){
		console.log("req in setloc");
		console.log(req.body.lat);
		var post = {lat: req.body.lat, lon: req.body.long}; 
		connection.query('insert into VisitorsInfo SET ?', post,function(err, rows, fields) {
			  if (!err)
			    console.log('No error while inserting data');
			  else
			    console.log('Error while performing Query.'+err);
			});
		};
		
//Get Map Coord
		exports.getmap = function(req,res)
		{	
            res.render("maps");
		};
		
		exports.getmarkers = function(req,res)
		{
			var result;
			connection.query('SELECT * FROM VisitorsInfo', function(error, results){
				if(error){
					console.log("Map loc fetch failed");
				}
				else{
						console.log("Query results(inside): " + JSON.stringify(results)); 
			            result = JSON.stringify(results);
			            res.send(result);
				}
        });
		}
		
		exports.getwords = function(req,res)
		{
			var result;
			connection.query('SELECT word FROM word', function(error, results){
				if(error){
					console.log("Words fetch failed");
				}
				else{
						console.log("Query results(inside): " + JSON.stringify(results)); 
			            result = JSON.stringify(results);
			            res.send(result);
				}
        });
		}
		
	//Graphs
		exports.graphs = function(req,res)
		{	
            res.render("graphs");
		};
		
		
		