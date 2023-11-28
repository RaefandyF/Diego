const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "diego",
    port: 3307
  });


app.get('/', function(req,res) {
    db.query("SELECT * FROM `Account`", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Email: " + email);
    console.log("Password: " + password);
    
    db.query("SELECT * FROM `Account` WHERE Email = '" + email + "' AND Password = '" + password +"'", (err,result) => {
        // console.log(result);
        if (err) {
            console.log(err);
        } else if (result.length > 0) {
            console.log(result);
            res.json(result);
        } else {
            console.log("data tidak ada");
            res.json(result);
        }
    })
})

app.post("/register", (req,res) => {
    const namaLengkap = req.body.namaLengkap;
    const noTelpon = req.body.noTelpon;
    const email = req.body.email;
    const password = req.body.password;
    const namaBisnis = req.body.namaBisnis;

    console.log("Nama Lengkap: " + namaLengkap);
    console.log("Nama Telepon: " + noTelpon);

    db.query(`INSERT INTO account (AccountID, RoleID, NamaLengkap, NamaBisnis, Email, NomorTelepon, Password) VALUES (NULL, 2, '${namaLengkap}', '${namaBisnis}', '${email}', '${noTelpon}', '${password}')`, (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Berhasil masukan data register");
                    res.sendStatus(200);
                }
               })
})

app.listen(8080, function() {
    console.log("Listening in port 8080");
})
