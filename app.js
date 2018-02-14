const express = require('express')
const app = express()
const request = require('request')
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get('/', (req, res) => res.send('Backend Service: Please call /terrier!'))
app.get('/terrier', function(req, res){
var url = "https://dog.ceo/api/breed/terrier/list";
 // request module is used to process the url and return the results in JSON format
 request(url, function(err, resp, body) {
   body = JSON.parse(body);
   if (!body) {
     body = "No results found. Try again.";
     res.send(body);
   }
   else{
     res.send(body.message)
   }
 });
});

app.listen(7000, () => console.log('Backend Service running on port 7000!'))
