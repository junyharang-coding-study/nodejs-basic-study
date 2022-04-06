const express = require("express");
const app = express();
const mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit : 10,
    host : "211.37.173.118",
    user : "chnops1",
    password : "chnops1234",
    database : "iomt_portal"
});

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
});

// __dirname = 현재 Directory 의미
app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.engine("html", require("ejs").renderFile);

// Router 기능
app.get("/", function (request, response) { // Root URL을 요청하면 Hello World를 출력하는 기능
    response.render("index.html");
});

// Router 기능
app.get("/about", function (request, response) { // /about URL을 요청하면 about page를 출력하는 기능
    response.render("about.html");
});

// Router 기능
app.get("/db", function (request, response) { // /db URL을 요청하면 about page를 출력하는 기능
    pool.getConnection(function(error, connection) {

        if(error) throw error;  // 연결 안됨!

        connection.query("select * from user", function(error, results, fields) {

            response.send(JSON.stringify(results));

            console.log("results 값 : ", results);

            connection.release();

            if(error) throw error;

        });
    });
});

