var office = require('office');

office.parse('MyDatabase.ods', function(err, data) {
    console.log(data.sheets);
});
