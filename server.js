const express = require('express')
const bodyParser = require('body-parser');
const app = express()
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')('ACx8zuX9w7Mk44lgZkx3GLp+hnMQT5+nuUoV6997c', 'AKIA5YBCGQW344ZLHRU4');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
  next();
});

app.post('/sendupdate', function (req, res) {
  console.log(req,res);
  client.messages
      .create({
         body: 'Hello there!',
         from: '+15519985623',
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         to: '+15519985623'
       })
      .then(message => res.send(req.body));
      
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})