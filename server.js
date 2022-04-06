const express = require("express");
const app = express();

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