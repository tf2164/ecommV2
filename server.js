
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const path = require('path');
 const bodyParser = require("body-parser");
require("dotenv").config();



app.use(cors());
app.use(express.json());

const mysql = require('mysql');
app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended:true}));



const db =mysql.createConnection({

host: 'ecommv2.c9cmbzningap.us-east-1.rds.amazonaws.com',
user: 'admin',
password: '12345678',
database: 'cozy_corner'

})

db.connect((err)=> {

    if(err) {
        return console.error('error: '+ err.message);
    }
    console.log('connected to db');

});

app.get("/products", (req,res)=> {
db.query("SELECT * FROM products;", (err, results) => {
if(err) {
    console.log(err)
}else{

    res.send(results)
}
})

})
// app.get('/shoplow',(req,res)=>{

//     connection.query('SELECT * FROM products',function(error,results,fields){
//         if (error) throw error;
//         console.log('request sent');
//         res.send(results);
//     })
// })

// app.post('/contact', (req, res) => {
//     connection.query("INSERT INTO formData (id, name, email, message) VALUES (?,?, ?, ?);", [req.body.name,req.body.email,req.body.message], (err, rows, fields) => {
//         console.log(req.body);
//         if (err) throw err;
//         res.redirect('back');
//     })
// });

// app.get("/contact", (req, res) => {
//     connection.query("SELECT * FROM formData", (err, rows, fields) => {
//         if (err) throw err;
//         res.send(rows);
//     })
// });



app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`);
});