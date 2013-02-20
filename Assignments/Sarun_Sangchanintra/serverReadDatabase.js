var http = require('http');

var parseXlsx = require('excel');


http.createServer( function(req, res) {

  console.log('Server Started ');

  parseXlsx('Currency.xlsx', function(data) {

      res.writeHead(200, {'content-type': 'text/plain'});

      res.write('Welcome to Currency Exchange Rates !\n');

      var row   = data[0];
      var cell = row[1];

      res.write("Currency = ");
      res.write(cell1);
      res.write("\n");

      res.end("Sayōnara !\n");

      console.log("Database cell = ", cell1);

  });


}).listen(8121);


console.log('Server running on port 8121');
