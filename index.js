// Main class exported with extra  legacy functions
class Pop {
    

  hello() {
      console.log('Hello npm friends');
  }

  nThing(){
    console.log(pop);

  }

  dexyJson (req, res, next) {
    res.json([{ Expample: 'This is some data that could be resed by nPoP if you set the server GET settings.' }, {anoter1:"this is more data"},
  {Another: "Dexy has a POST route as well ( ͡° ͜ʖ ͡°)"}]);
  }

  shyaboi() {
    console.log('Shysadasaboi!');
}
}
module.exports = Pop



class Server extends Pop {

pop(
ok = this.dexyJson,
pN=process.env.PORT||3333,
 route1="/",
  route2="/index",
   route3="/dexy",
    index="../../views/index.html",
    dex="../../views/index2.html",
     dexy="data might go here"
      ){
  
  const express = require('express')
  var path = require('path');
  const app = express()
  // var pNum = pN
  // var portNumber = process.env || pNum
  const port = pN
  
  
  app.use("/", express.static("./views/imgs"));
  app.use("/index", express.static("./views/imgs"));
  app.use("/dexy", express.static("./views/imgs"));
  app.use("/dexy", express.static("./views/js"));
  app.use("/index", express.static("./views/js"));
  app.use("/", express.static("./views/js"));
  app.use("/", express.static("./views/styles"));
  app.use("/index", express.static("./views/styles"));
  app.use("/dexy", express.static("./views/styles"));
  const bodyParser = require("body-parser");
  app.use(bodyParser.json()); // to support JSON bodies
  app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded 

  

  app.get(route1, function (req, res, next) {
res.sendFile(path.join(__dirname, index));
});

app.get(route2, function (req, res, next) {
res.sendFile(path.join(__dirname, dex));
});

app.get(route3, ok)

app.post(route3, function (req, res, next) {
const stuff = req.body
console.log(stuff)
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


}}

module.exports = Server