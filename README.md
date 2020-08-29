# nPoP
<<<<<<< HEAD
In its current form (nPoP ex) nPoP is a quick-start package/dead simple server built on top of the express framework. 
<br>
# Installation: There are two option for using/installing nPoP

## npx npop
Make sure you already have Nodejs installed, to check, open a terminal and type 
```
node --version
```
If you do not have Nodejs installed, you can find a link here https://nodejs.org/en/download/

Once you have node installed, simply open a terminal to the directory/folder you want nPoP installed in,
and type:
```
npx npop
````
A full nPoP server with 3 routes and associated  HTML files with routes set up to handle images/js/css/ and a JSON get/post route.
This will all be set up and if you have vs code, your editor will open the nPoP folder and your default browser will open to the default localhost:3333

## Install the Starter Package

To install a barebones nPoP server. In your open project, 

```
npm install npop
````
this will have nPoP installed with express as a dependency and those that come with express(body-parser...etc)

=======
In it's current form (nPoPex) nPoP is a quick-start package/dead simple server built on top of the express framework. 
<br>
# Installation
## There are two option for using nPoP
<br>
### npx npop
Make sure you already have Nodejs installed, to check, open a terminal and type 
```
node --version
```
If you do not have Nodejs installed, you can find a link here https://nodejs.org/en/download/

<br>
Once you have node installed, simply open a terminal to the directory/folder you want nPoP installed in, and type:
```
npx  npop
```
A full nPoP server with 3 routes and assosiated HTML files with routes set up to handle images/js/css/ and a JSON get/post route
<br>
This will all be set up and if you have vs code, your editor will open the nPoP folder and your default browser will open to the default localhost:3333

### Install the Starter Package

To install a barebones nPoP server. In your open project, 

```
npm install npop
````
this will have nPoP installed with express as a depandantcey and those that come with express(body-parser...etc)
<br>
>>>>>>> 1ebba7d4057dd0d4dad0bc7aede9f4027f024125
to use nPoP in your Nodejs project add:
```
const PoP = require("npop");
const n = new PoP()
n.pop()
```
If you have made a "views" dicrectory/folder the server will have 3 default routes pointed at the views dicrectory/folder.
<<<<<<< HEAD
=======
<br>
The ouput will be whatever is passed into muhpackage()
>>>>>>> 1ebba7d4057dd0d4dad0bc7aede9f4027f024125

# nPoP Parameters

You can pass in the following parameters into the npop function:

```
npop(
    dexyGet(), //this parameter can be fed a function containing request and response from express.//
    PORT:process.env.PORT||3333,
    route1:"/",
    route2:"/index",
    route3:"/dexy"
    (path to index.hmtl)="../../views/index.html",
    (path to 2nd hmtlpage)="../../views/index2.html",
    (not currently in use)="string"
)
```

# dexyGet()

dexyGet( ) is the first customizable route function in nPoP

Basically dexyGet( ) is the function parameter of the Express GET request for route3 built into nPoP. 

an example of how the dexyGet( ) route is working is like so:
```
app.get(route3, 
    dexyGet(request,response){}
)
```
The parameters inside of the dexyGet function are user created variables such as:
```
dexyGet(yourReqVar, yourResVar){}
```
For brevity; I will be referring  to the variables hereafter as req and res.
So if you want to customize the dexyGet( ) route, you can do so just like the function parameter of an express GET route.

In the first parameter of the nPoP function
Write:
```
const PoP = require("npop");
const n = new PoP()
  
n.pop((req,res) => {res.send('hiwrld')})
```
Or you can pass in the function as a variable such as:
```
const PoP = require("npop");
const n = new PoP()
  
const dexyGet = (req,res)=> {res.send('hiwrld')}
n.pop(dexyGet)
```
<<<<<<< HEAD
All sequential parameters are optional and will be set by default unless otherwise given a parameter.
=======
to output a second function to the console log.
>>>>>>> 1ebba7d4057dd0d4dad0bc7aede9f4027f024125
