const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
// Not sure how to display image with index stylesheet
//app.use(express.static("img"));

app.get("/", (req, res, next) => {
    console.log("Going to index");
    res.render("index");
})

app.get("/signin", (req, res, next) => {
    console.log("Going to signin");
    res.render("signin");
})

app.get("/signup", (req, res, next) => {
    console.log("Going to signup");
    res.render("signup");
})

app.get("/dummyMentor", (req, res, next) => {
    console.log("Going to dummy mentor");
    res.render("dummyMentor");
})

app.get("/home", (req, res, next) => {
    console.log("Going to home");
    res.render("home");
})

app.listen(8080, function(err) {
    if (err) console.log(err);
    console.log("Listening on port 8080...");
});