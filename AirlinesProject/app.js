const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const http = require("https");


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");
});

const requestUrl = url.parse(url.format({
    protocol: 'https',
    hostname: 'yoursite.com',
    pathname: '/the/path',
    query: {
        key: value
    }
}));

app.post("/", function(req, res) {

  const requestUrl = url.parse(url.format({
      protocol: 'https',
      hostname: 'test.api.amadeus.com',
      pathname: '/v1/shopping/flight-destinations/',
      query: {
          origin: 'PAR',
          maxPrice: '200'
      }

      https.get({hostname: requestUrl.hostname, path: requestUrl.path}, function(response) {
   // ...
})
  }));
      let data = "";
      let airlineData = "";
      //const url = "https://test.api.amadeus.com/v1/shopping/flight-destinations/?origin=PAR";
      const options = {
        "method": "GET",
        "hostname": "test.api.amadeus.com",
        "path": "/v1/shopping/flight-destinations/?origin=PAR&maxPrice=200",
        "headers": {
          "Authorization": "Bearer yyaJq7cj6EPrwYlvrnYlaL9ViQOO",
          "useQueryString": true,
          "Accept": "application/json"
        }
      };
      https.request(options, function(response) {

          console.log(response.statusCode);

          response.on("data", function(chunk) {
            data += chunk;
          });

          response.on('end', function() {
              airlineData = JSON.parse(data);
              /*var quotesArray = airlineData.Quotes;
              //res.send(quotesArray);
              var originArray = [];
              for(var i = 0; i < quotesArray.length; i++) {
                if(quotesArray[i].OutboundLeg.OriginId === 98424 && quotesArray[i].OutboundLeg.DestinationId === 42850) {
                  originArray.push(quotesArray[i]);*/
              res.send(airlineData);
            })
          })
        })



    app.listen(3000, function() {
      console.log("Server is running on port 3000.");
    })






    /*res.on("end", function() {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

      //const desc = weatherData.weather[0].description;
      //const icon = weatherData.weather[0].icon;

      //const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      //console.log(iconUrl);


      //res.write("<h1>The temperature in Bern currently is " + temp + " degrees Celcius</h1>");
      // res.write("<p>The weather is currently " + desc + "</p>");
      // res.write("<img src=" + iconUrl + ">");

    })

app.post("/", function(req,res) {
  let data = "";
  let airlineData = "";
  var endpoint = "https://partners.api.skyscanner.net/";
  var path = "apiservices/browseroutes/v1.0/";
  var country = "CH/";
  var currency = "chf/";
  var locale = "en-US/";
  var origin = "CH-sky/";
  var destination = "IN-sky/";
  var outboundpartialdate = "2021";
  var inboundpartialdate = "anytime";
  var apiKey = "?apikey=prtl6749387986743898559646983194";
  const url = endpoint + path + country + currency + locale + origin + destination + outboundpartialdate + apiKey;
  console.log(url);
  https.get(url, function(response) {

    console.log(response.statusCode);
    response.on("data", function(chunk) {
      data += chunk;
    });

    response.on('end', function() {
      airlineData = JSON.parse(data);
      var quotesArray = airlineData.Quotes;
      //res.send(quotesArray);
      var originArray = [];
      for(var i = 0; i < quotesArray.length; i++) {
        if(quotesArray[i].OutboundLeg.OriginId === 98424 && quotesArray[i].OutboundLeg.DestinationId === 42850) {
          originArray.push(quotesArray[i]);
        }
      }
      res.send(originArray);
    })

  });

})*/



    // Access token: l00BWCq9XCmDwQXZZS2gH5XKdCBG
    // API Key: AiVrbfYFN1JI3Vxr7hypRRVH1570CfPx
    // API Secret: 92O7FVPkfcNCg5Aw
    // Quotes[1].QuoteId
    // Places[2].Name = Bengaluru
    // Places[12].Name = Zurich
    // Bengaluru PlaceId = 42850
    // Zurich PlaceId = 98424
    // Quotes [{"QuoteId": 1,"MinPrice": 352,"Direct": false,"OutboundLeg": {"CarrierIds": [50441],"OriginId": 54833,"DestinationId": 42850,"DepartureDate": "2021-07-06T00:00:00"},"QuoteDateTime": "2021-01-05T08:04:00"5 items},{"QuoteId": 2,"MinPrice": 380,"Direct": false,"OutboundLeg": {"CarrierIds": [13751 item],"OriginId": 98424,"DestinationId": 47116,"DepartureDate": "2021-07-28T00:00:00"},"QuoteDateTime": "2021-01-06T14:20:00"5 items},{"QuoteId": 3,"MinPrice": 456,"Direct": false,"OutboundLeg": {"CarrierIds": [9521 item],"OriginId": 98424,"DestinationId": 42989,"DepartureDate": "2021-07-10T00:00:00"},"QuoteDateTime": "2021-01-06T18:37:00"},{"QuoteId": 4,"MinPrice": 731,"Direct": true,"OutboundLeg": {"CarrierIds": [13841 item],"OriginId": 98424,"DestinationId": 47116,"DepartureDate": "2021-07-02T00:00:00"},"QuoteDateTime": "2021-01-06T07:05:00"5 items},{"QuoteId": 5,"MinPrice": 812,"Direct": true,"OutboundLeg": {"CarrierIds": [13841 item],"OriginId": 98424,"DestinationId": 42989,"DepartureDate": "2021-07-10T00:00:00"},"QuoteDateTime": "2021-01-06T18:37:00"5 items}]
    // main.temp

    //https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CH/chf/en-US/CH-sky/IN-sky/2021-07?apikey=prtl6749387986743898559646983194
    //https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CH/chf/en-US/ch-sky/in-sky/2021-07?apikey=prtl6749387986743898559646983194

    //https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/FR/eur/en-US/us/anywhere/anytime/anytime?apikey=prtl6749387986743898559646983194
