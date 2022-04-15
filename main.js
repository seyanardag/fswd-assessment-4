// var express = require("express");
// var app = express();

// var data = require("./data.json");


// app.get("/", function(req, res) { 
//   res.json(data);
// });

// app.listen(5000, function() {
// 	console.log("Server running on port 5000...");
// });


const express = require("express");
const app = express();
//bu uygulamayı başka uygulamalarda da çalıştırabilmek için cors modülünü kullanıyoruz
const cors = require('cors');
app.use(cors());
app.options('*', cors());

//Önceden yapılandırılmış bir bağlantı noktası yoksa PORT 5000'i kullan
const PORT = process.env.PORT || 5000

var data = require("./data.json");

app.get("/", function(req, res) {
  res.json(data);
});

app.listen(PORT, function() {
  console.log("Server running on port 5000...");
});