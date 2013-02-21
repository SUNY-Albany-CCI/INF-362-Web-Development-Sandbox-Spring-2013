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
      
      var row6   = data[2];
      var cell66 = row6[0];
      
      var row7 = data[2];
      var cell77 = row7[1];
      
      var row8 = data[2];
      var cell88 = row8[2];
      
      res.write(cell66);
      res.write(" = ");
      res.write(cell77);
      res.write(" | ");
      res.write(cell88);
      res.write("\n\n");
      
      var row9   = data[3];
      var cell99 = row9[0];
      
      var row10 = data[3];
      var cell10 = row10[1];
      
      var row11 = data[3];
      var cell12 = row11[2];
      
      res.write(cell99);
      res.write(" = ");
      res.write(cell10);
      res.write(" | ");
      res.write(cell12);
      res.write("\n\n");
      
      var row13   = data[4];
      var cell13 = row13[0];
      
      var row14 = data[4];
      var cell14 = row14[1];
      
      var row15 = data[4];
      var cell15 = row15[2];
      
      res.write(cell13);
      res.write(" = ");
      res.write(cell14);
      res.write(" | ");
      res.write(cell15);
      res.write("\n\n");

      var row16   = data[5];
      var cell16 = row16[0];
      
      var row17 = data[5];
      var cell17 = row17[1];
      
      var row18 = data[5];
      var cell18 = row18[2];
      
      res.write(cell16);
      res.write(" = ");
      res.write(cell17);
      res.write(" | ");
      res.write(cell18);
      res.write("\n\n");

      var row19   = data[6];
      var cell19 = row19[0];
      
      var row20 = data[6];
      var cell20 = row20[1];
      
      var row21 = data[6];
      var cell21 = row21[2];
      
      res.write(cell19);
      res.write(" = ");
      res.write(cell20);
      res.write(" | ");
      res.write(cell21);
      res.write("\n\n");
      
      res.end("Sayonara !\n");

      console.log("Currency = ", cell11, "|", cell22);

  });


}).listen(8124);


console.log('Server running on port 8124');
