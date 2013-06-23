var $ = require('cheerio')
var request = require('request')



function gotHTML(err, resp, html) {
	var internal = 0;
	var external = 0;
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
 
  parsedHTML('a').map(function(i, link) {
    var href = $(link).attr('href')
    /*if (!href.match('.png')) return
    imageURLs.push(domain + href)*/
    href = href.replace(domain,"");

  	console.log(href);
  	if (href) {
	  	if (href.indexOf("http://") == 0) {
	  		console.log("ex");
	  		external++;
	  	} else {
	  		console.log("in");
	  		internal++;
	  	}
  	}
  })

  console.log("internal = "+internal);
  console.log("external = "+external);

}

var domain = process.argv[2];
request(domain, gotHTML)