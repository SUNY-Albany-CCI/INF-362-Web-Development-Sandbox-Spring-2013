var http = require('http');

var parseXlsx = require('excel');


http.createServer( function(req, res) {

  console.log('Server Started ');

  parseXlsx('ClassRoster.xlsx', function(data) {

      var query = require('url').parse(req.url).query;
      var row = require('querystring').parse(query).row;
      var col = require('querystring').parse(query).col;

      res.writeHead(200, {'content-type': 'text/plain'});

      res.write('Welcome to the Spreadsheet reader !\n');

      var rowdata  = data[row];
      var celldata = rowdata[col];

      res.write("Database cell "+row+" "+col+" = ");
      res.write(celldata);
      res.write("\n");

      res.end("Good Bye !\n");

      console.log("Database cell ",row,",",col," data = ", celldata);

  });


}).listen(8124);


console.log('Server running on port 8124');
