var request = require("request"); // request is used for all http requests
var cheerio = require('cheerio'); // cheerio builds a jQuery compatible DOM for you to accesss with jQuery style selectors
var the_domain = process.argv[2]; // this reads the url you pass to the script in the command line

// first set all of the request options in this block...
var request_options = {
  followAllRedirects: true,
  url:the_domain,
  method: "GET",
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept': 'text/html;q=0.9,*/*;q=0.8'
  }
};

request(request_options, function(error, response, html) {
  	var $ = cheerio.load(html); // this builds the DOM model for you saved as "$"
    console.log($('title')); // spit out the reuslts...

});
