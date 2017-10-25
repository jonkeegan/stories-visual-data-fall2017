var request = require("request");
var cheerio = require('cheerio');
var the_domain = process.argv[2];

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
  	var $ = cheerio.load(html);
    console.log( $('title').html() );
});
