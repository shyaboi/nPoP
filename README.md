# nPoP
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
to use nPoP in your Nodejs project add:
```
const PoP = require("npop");
const n = new PoP()
n.pop()
```
If you have made a "views" dicrectory/folder the server will have 3 default routes pointed at the views dicrectory/folder.
<br>
The ouput will be whatever is passed into muhpackage()


<br>
You can also write the function:

```
ok()
```
to output a second function to the console log.
