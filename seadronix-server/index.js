const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/vision", function (req, res) {
  res.render("vision", { subTitle: "vision" });
});

app.get("/location", function (req, res) {
  res.render("location", { subTitle: "location" });
});

app.get("/search", function (req, res) {
  res.render("search", { subTitle: "search" });
});

app.listen(3000, function () {
  console.log("3000번에서 서버 대기 중...");
});
