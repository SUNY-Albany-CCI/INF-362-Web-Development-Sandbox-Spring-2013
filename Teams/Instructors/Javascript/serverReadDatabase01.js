var http = require('http');

var office = require('office');




exports.ods = function(data) {

  office.parse('MyDatabase.xlsx', function(err, data) {

    // var cellvalue = data.sheets.sheet[0].rows.row[0].cell[0]['$t'];

    // console.log("Cell =",cellvalue);
    console.log(data);

  });

};



http.createServer( function(req, res) {

  console.log('Server Started ');

  var data = "";

  exports.ods(data);

  console.log( data );

  // var cellvalue = data.sheets.sheet[0].rows.row[0].cell[0]['$t'];

  // console.log("Cell =",cellvalue);

  res.writeHead(200, {'content-type': 'text/plain'});

  res.write('Welcome to the Spreadsheet reader !\n');

  // res.write("Cell =", cellvalue);

  res.end("Good Bye !\n");

}).listen(8124);


console.log('Server running on port 8124');
