

/*var system = require('system');
var args = system.args;
console.log(args[0]);*/

var page = require('webpage').create();

var start = new Date().getTime();
console.log(start);

function pageOpen(p,i) {

    console.log("page open");
    console.log(p[i]);

    page.open(p[i], function() {

    	var end = new Date().getTime();
    	console.log(end);

    	page.render('test.png');

        try {
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
                console.log('jQuery included');

                var x = page.evaluate(function() {
                	  var links = {};
                    $("a").each(function(i,a){
                    	var $a = $(a);
                    	if (links[$a.attr('href')]) links[$a.attr('href')]++
                    		else links[$a.attr('href')] = 1;
                    });

                    return links;
                });

                console.log(JSON.stringify(x, null, ' '));
                console.log(start);
                console.log(end);
                console.log("response = "+(end-start)+" ms");
                if (i > p.length - 1) {
                    phantom.exit();
                } else {
                    pageOpen(sites,current+1);
                }
            });
        } catch (e) {
            console.log("exception = "+e);
        }
    });
}

//pageOpen('http://guardian.co.uk');

var sites = ['http://guardian.co.uk', 'http://guardian.co.uk'];
var current = 0;
pageOpen(sites,current);
