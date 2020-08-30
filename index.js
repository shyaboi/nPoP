const routeArray = [
  route1="/",
  route2="/index",
  route3="/dexy",
  route4="/wildcard"
];

// Main class exported with extra  legacy functions


class Pop {
  
  
  hello() {
    console.log('Hello npm friends');
  }
  
  nThing(){
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
    ok = [routeArray],
      ){
  
  const express = require('express')
  var path = require('path');
  const app = express()
  // var pNum = pN
  // var portNumber = process.env || pNum
  const port = pN
  
  
  app.use(route1, express.static("./views/imgs"));
  app.use(route1, express.static("./views/js"));
  app.use(route1, express.static("./views/styles"));
  app.use(route2, express.static("./views/imgs"));
  app.use(route2, express.static("./views/js"));
  app.use(route2, express.static("./views/styles"));
  app.use(route3, express.static("./views/imgs"));
  app.use(route3, express.static("./views/js"));
  app.use(route3, express.static("./views/styles"));
  const bodyParser = require("body-parser");
  app.use(bodyParser.json()); // to support JSON bodies
  app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded 

  

app.get(route1, homeGet);

app.get(route2, indexGet);

app.get(route3, dexyGet)

app.post(route3, function (req, res, next) {
const stuff = req.body
console.log(stuff)
res.redirect("/")
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


}
}
module.exports = Server