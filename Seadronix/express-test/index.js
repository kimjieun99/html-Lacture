const express = require("express");
const path = require("path");
const app = express();
//routing
//app.get("/", function (req, res) {
//  res.send("hello express");
//});
//콜백 함수
app.get("/login", function (req, res) {
  res.send(
    '<form method="get" action="/loginOK"> <input type="text" name="userID"><input type="password" name="userPW"><button>로그인</button></form>'
  );
  res.sendFile(path.join(__dirname, "login.html"));
});
app.get("/loginOK", function (req, res) {
  const id = req.query.userID;
  const pw = req.query.userPW;
  const gender = req.query.gender;
  let _gender = "";
  if (gender === "male") {
    _gender = "남자";
  } else {
    _gender = "여자";
  }
  if (id === "kimjieun99" && pw === "1234") {
    res, send("<h1>${_gender}}반갑습니다. 김지은님</h1>");
  } else {
    res.send("<h1>아이디와 패스워드를 확인해 주세요</h1>");
  }
});
app.listen(3000, function () {
  console.log("3000번 서버에서 대기 중...");
});
