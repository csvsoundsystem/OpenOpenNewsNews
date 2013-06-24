var server = require('webserver').create();
var service = server.listen(8080, function(request, response) {
    response.statusCode = 200;

    var test = "moo";

    /*response.write('<html><body>Hello!</body></html>');
    console.dir(JSON.stringify(request,null," "));
    console.log(request.url);
    response.close();*/

    var page = require('webpage').create();

		var start = new Date().getTime();
		//console.log(start);

		function pageOpen(p, callback) {

		    console.log("page open");

		    page.open(p, function() {

		    	var end = new Date().getTime();
		    	//console.log(end);

		        try {
		            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
		                /*console.log('jQuery included');*/

		                var x = page.evaluate(function() {
		                	var links = {};
		                    $("a").each(function(i,a){
		                    	var $a = $(a);
		                    	if (links[$a.attr('href')]) links[$a.attr('href')]++
		                    		else links[$a.attr('href')] = 1;
		                    });

		                    return links;
		                });

		                /*console.log(JSON.stringify(x, null, ' '));
		                console.log(start);
		                console.log(end);
		                console.log("response = "+(end-start)+" ms");*/

		                //response.write("response = "+(end-start)+" ms");
		                
		                var responsetime = end-start;
		                //return(responseTime);
		                console.log("about to callback");
		                callback(responsetime);
		            });
		        } catch (e) {
		            console.log("exception = "+e);
		            callback(null);
		        }
		    });
		}

		/*response.write("data");
		response.close();*/
		console.log("before");
		//console.dir(response);

		pageOpen('http://guardian.co.uk', function(data) {
			
			console.log("THE DATA = "+data);
			console.dir(response);
			console.log("test="+test);

			response.write(data);
			response.close();

			return data;
		});


		/*phantom.exit();*/
    
});