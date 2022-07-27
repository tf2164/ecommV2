
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const mysql = require('mysql');

const db =mysql.createConnection({

host: 'ecommv2.c9cmbzningap.us-east-1.rds.amazonaws.com',
port:  3306,
user: 'admin',
password: '12345678',
database: 'ecommv2'

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