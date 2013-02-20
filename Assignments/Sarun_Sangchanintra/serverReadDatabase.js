var http = require('http');

var parseXlsx = require('excel');


http.createServer( function(req, res) {

  console.log('Server Started ');

  parseXlsx('Currency.xlsx', function(data) {

      res.writeHead(200, {'content-type': 'text/plain'});

      res.write('Welcome to Currency Exchange Rates of Thai(Baht) & Japanese(Yen) !\n\n');
      
      
      var row1   = data[0];
      var cell11 = row1[1];
      
      var row2   = data[0];
      var cell22 = row2[2];

      res.write("Currency = ");
      res.write(cell11);
      res.write(" | ");
      res.write(cell22);
      res.write("\n\n");
      
      var row3   = data[1];
      var cell33 = row3[0];
      
      var row4 = data[1];
      var cell44 = row4[1];
      
      var row5 = data[1];
      var cell55 = row5[2];
      
      res.write(cell33);
      res.write(" = ");
      res.write(cell44);
      res.write(" | ");
      res.write(cell55);
      res.write("\n\n");
      

      res.end("Sayonara !\n");

      console.log("Currency = ", cell11, "|", cell22);

  });


}).listen(8124);


console.log('Server running on port 8124');
