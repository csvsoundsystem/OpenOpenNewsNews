var express = require("express");
var app = express();
var fs = require('fs');
var  mustache = require('mustache');
var sys = require('sys');

app.use("/static", express.static(__dirname + '/static'));
//app.use(express.static('static'));
var data = {
  graph: [ 
    {
      heading: "one",
      bar: [
        {
          legend: "safasdf",
          width: "20"
        },
        {
          legend: "safasdf",
          width: "80"
        },
        {
          legend: "safasdf",
          width: "93"
        },
        {
          legend: "safasdf",
          width: "15"
        },
        {
          legend: "safasdf",
          width: "78"
        }
      ]
    }
  ]
};

app.get('/', function(req, res){
  var page = fs.readFileSync('index.html', "utf8");
  var html = mustache.to_html(page, data);
  res.send(html);
});

app.listen(3000);