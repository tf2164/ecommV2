// var express = require('express');
// var app = express();
// var sql = require("mssql");
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// var config = {
//     user: 'admin',
//     password: '12345678',
//     server: 'localhost', 
//     database: 'ecommv2' 
// };
// app.use(express.json({
//     type: ['application/json', 'text/plain']
//   }));

//   app.post('/', function(req, res) { 
//     res.set('Access-Control-Allow-Origin', '*'); 
//     const body = JSON.parse(req.body);
//     let connection = new sql.ConnectionPool(config, function(err) { 
//     let request = new sql.Request(connection);
//     request.query("insert into persons (FirstName, LastName) values ('" + body.FirstName + "', '" + body.LastName + "')"); 
//     });
//      res.send({ message: 'Success'})
//  });
 
// app.listen(5000, () => {console.log('Server is running..')});