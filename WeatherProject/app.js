const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");
  /*const url = "https://api.openweathermap.org/data/2.5/weather?q=Muensingen&appid=3faea60b18b77d5f3eb7274d0fcb9338&units=metric";
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(iconUrl);


      res.write("<h1>The temperature in Bern currently is " + temp + " degrees Celcius</h1>");
      res.write("<p>The weather is currently " + desc + "</p>");
      res.write("<img src=" + iconUrl + ">");
      res.send();
    })
  })*/
})

app.post("/", function(req,res) {
  const cityName = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3faea60b18b77d5f3eb7274d0fcb9338&units=metric";

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>The temperature in " + cityName + " currently is " + temp + " degress Celcius</h1>");
      res.write("<p>The weather is currently " + desc + "</p>");
      res.write("<img src=" + iconUrl + ">");
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
