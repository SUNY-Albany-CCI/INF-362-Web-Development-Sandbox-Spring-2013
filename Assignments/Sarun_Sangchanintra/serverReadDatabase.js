var http = require('http');

var parseXlsx = require('excel');


http.createServer( function(req, res) {

  console.log('Server Started ');

  parseXlsx('Currency.xlsx', function(data) {

      res.writeHead(200, {'content-type': 'text/plain'});

      res.write('Welcome to Currency Exchange Rates of Thai(Baht) & Japanese(Yen) !\n');

      var row1   = data[0];
      var cell11 = row1[1];

      res.write("Database cell11 = ");
      res.write(cell11);
      res.write("\n");

      res.end("Sayōnara !\n");

      console.log("Database cell11 = ", cell11);

  });


}).listen(8124);


console.log('Server running on port 8124');
