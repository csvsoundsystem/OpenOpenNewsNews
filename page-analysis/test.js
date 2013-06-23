var page = require('webpage').create();

var start = new Date().getTime();;
console.log(start);

page.open('http://cnn.com', function() {

		var end = new Date().getTime();
		console.log(end);


	  page.render('test.png');

    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {

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
        phantom.exit();
    });
});