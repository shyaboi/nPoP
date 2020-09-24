// class Routes{
//    routeArray = [
//     route1="/",
//     route2="/index",
//     route3="/dexy",
//     route4="/wildcard"
//   ];
// }
// module.exports = Routes

// Main class exported with extra  legacy functions


class Pop {
  routeArray =
   [
    this.route1="/",
    this.route2="/index",
    this.route3="/dexy",
    this.route4="/wildcard"
  ];
  
  hello() {
    console.log('Hello npm friends');
  }
  
  nThing(pop){
    console.log(pop);
  }
  
  dexyGet = (req, res, next) => {
    res.json([{ Expample: 'This is some data that could be resed by nPoP if you set the server GET settings.' }, {anoter1:"this is more data"},
    {Another: "Dexy has a POST route as well ( ͡° ͜ʖ ͡°)"}]);
  }
  
  homeGet = (req, res, next, dex="../../views/index.html")=>{
    var path = require('path');
   
    res.sendFile(path.join(__dirname, dex));
    }
  indexGet = (req, res, next, index="../../views/index2.html")=>{
      var path = require('path');
      res.sendFile(path.join(__dirname, index));
  }
  nuevoRoute = ()=> {}
    

  }



getArr = ()=> {
  app.get(route4, function (req, res, next) {
    res.send("hiwrlsdff")
    });
}


module.exports = Pop



class Server extends Pop {
  
  
  pop(
    homeGet = this.homeGet,
    dexyGet = this.dexyGet,
    indexGet = this.indexGet,
    pN=process.env.PORT||3333,
    ok = this.routeArray,
      ){
  
  const express = require('express')
  var path = require('path');
  const app = express()
  // var pNum = pN
  // var portNumber = process.env || pNum
  const port = pN
  
  
  app.use(this.route1, express.static("./views/imgs"));
  app.use(this.route1, express.static("./views/js"));
  app.use(this.route1, express.static("./views/styles"));
  app.use(this.route2, express.static("./views/imgs"));
  app.use(this.route2, express.static("./views/js"));
  app.use(this.route2, express.static("./views/styles"));
  app.use(this.route3, express.static("./views/imgs"));
  app.use(this.route3, express.static("./views/js"));
  app.use(this.route3, express.static("./views/styles"));
  const bodyParser = require("body-parser");
  app.use(bodyParser.json()); // to support JSON bodies
  app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded 

  

app.get(this.route1, homeGet);

app.get(this.route2, indexGet);

app.get(this.route3, dexyGet)

app.post(this.route3, function (req, res, next) {
const stuff = req.body
console.log(stuff)
res.redirect("/")
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


}
}
module.exports = Server
