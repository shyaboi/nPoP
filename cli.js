#!/usr/bin/env node
const { exec } = require("child_process");

const fs = require("fs");

exec("echo installing things and stuff", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

fs.mkdir("./nPoP", { recursive: true }, (err) => {
  if (err) throw err;
  exec("echo Created root file", (error, data, getter) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log(data);
  });
});

exec("cd nPoP && echo gitignorifying", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});

fs.writeFile(
  "./nPoP/.gitignore",
  `.gitignore
node_modules
  `,
  (err) => {
    if (err) throw err;
    exec("echo Created .gitignore", (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    });
  }
);
if (process.platform === "win32") {
  exec(
    "echo You runnin Wandows && echo package JSON created.",
    (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    }
  );
  fs.writeFile(
    "./nPoP/package.json",
    `
    {
        "description": "My new site made with nPoP",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "start http://localhost:3333 && nodemon server.js"
        },
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
    }
  );
} else {
  exec(
    `echo You runnin ${process.platform} && echo package JSON created.`,
    (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      console.log(data);
    }
  );
  fs.writeFile(
    "./nPoP/package.json",
    `
    {
        "description": "My new site made with nPoP",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "http://localhost:3333 && nodemon server.js"
        },
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
      console.log("package JSON made (unix/gnu build)");
    }
  );
}

// exec("cd nPoP && npm i express", (error, data) => {
// 	if(error){
// 		console.log("error",error.message);
// 		return;
// 	}

// 		console.log("data",data);

//   console.log("express installed")
// });

exec(
  "cd nPoP && npm i npop express nodemon",
  (error, data, getter) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log(data);
    console.log("nPoP installed itself, nodemon and exxoresss");
    console.log("starting yoour site ( ͡° ͜ʖ ͡°)");
    console.log("Have fun with nPoP!");
    console.log("If you want to close the server press ctrl+c");
  }
);

// exec("cd nPoP && npm i nodemon", (error, data, getter) => {
//   if(error){
//     console.log("error",error.message);
// 		return;
// 	}
//   console.log("nPoP installed itself")
//   console.log("Have fun with nPoP!")
// });

fs.writeFile(
  "./nPoP/server.js",
  `var PoP = require("npop");
  var n = new PoP()
  
  n.pop()`,
  (err) => {
    if (err) throw err;
  }
);
console.log("Server Created");

fs.mkdir("./nPoP/views", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("views folder created");

exec("cd nPoP && cd views", (error, data, getter) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
  console.log("view move");
});

fs.writeFile(
  "./nPoP/views/index.html",
  `<html>
  <head>
      <title>nPoP</title>
      <link rel="stylesheet" href="style.css">
  </head>

  <body>
      <canvas id="tv-screen"></canvas>
      <div id="ss">nPoP</div>
      <a href="/index" id="index">Index</a>
      <a href="/dexy" id="dexy">Dexy</a>

  </body>
  <script src="dvd.js"></script>
</html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("index.html created");

fs.writeFile(
  "./nPoP/views/index2.html",
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nPoP</title>
    </head>
    <body>
    <h1>anoterh 1 </h1>
    a 2nd page for things.
    This is very much a work in progress.
    <a href="/">home</a>
    <a href="/dexy">dexy</a>
    
    </body>
    </html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("index2.html created");

fs.writeFile(
  "./nPoP/views/dexy.html",
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nPoP</title>
    </head>
    <body>
     jsons here maybe?
      <a href="/index">index</a>
      <a href="/">home</a>
      
      </body>
      </html>`,
  (err) => {
    if (err) throw err;
  }
);
console.log("dexy.html created");

fs.mkdir("./nPoP/views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("images folder created");

exec(
  "cd nPoP/views/imgs && curl -o logo.png https://i.ibb.co/sWr5Tpb/logo.png",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }

    console.log(data);

    console.log("cuuuuuuuuuuuuuuurl");
  }
);

exec(
  "echo making it downloaded logo",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("cd");
    console.log(data);
  }
);

exec(
  "cd nPoP/views/styles && echo making it stlyeish",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("cd");
    console.log(data);
  }
);

fs.mkdir("./nPoP/views/styles", { recursive: true }, (err) => {
  if (err) throw err;
});
exec(
  "cd nPoP/views/styles && echo went to style folder",
  (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("cd");
    console.log(data);
  }
);

fs.writeFile(
  "./nPoP/views/styles/style.css",
  `  * {margin:0; padding: 0; color:red;}
  #ss{
    text-align: center;
   position: absolute;
   font-size: 98px;
   top: 5vw;
   right: 40vw;
   overflow: hidden;
   color: blue;
 }
 
 
  #index{
     position: absolute;
     font-size: 65px;
     top: 10vw;
     right: 50vw;
     overflow: hidden;
 }
 
 
 #dexy{
     position: absolute;
     font-size: 65px;
     top: 20vw;
     right: 50vw;
     overflow: hidden;
 }
 
 body::-webkit-scrollbar {
     display: none;
   }`,
  (err) => {
    if (err) throw err;
  }
);
console.log("style.css created");

exec("cd nPoP/views && echo making JavaScript", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log("makeing js folder");
  console.log(data);
});

fs.mkdir("./nPoP/views/js", { recursive: true }, (err) => {
  if (err) throw err;
});

exec("cd nPoP/views/js && echo making JavaScript2", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log("makeing js file");
  console.log(data);
});

fs.writeFile(
  "./nPoP/views/js/dvd.js",
  `// stolen from https://github.com/AlessioMaddaluno/bouncing-dvd-logo

  let speed = 20;
  let scale = 0.40; 
  let canvas;
  let ctx;
  let logoColor;
  
  let dvd = {
      x: 200,
      y: 300,
      xspeed: 4,
      yspeed: 4,
      img: new Image()
  };
  
  (function main(){
      canvas = document.getElementById("tv-screen");
      ctx = canvas.getContext("2d");
      dvd.img.src = 'logo.png';
  
      //Draw the "tv screen"
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
  
      pickColor();
      update();
  })();
  
  function update() {
      setTimeout(() => {
          //Draw the canvas background
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          //Draw DVD Logo and his background
          ctx.fillStyle = logoColor;
          ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
          ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
          //Move the logo
          dvd.x+=dvd.xspeed;
          dvd.y+=dvd.yspeed;
          //Check for collision 
          checkHitBox();
          update();   
      }, speed)
  }
  
  //Check for border collision
  function checkHitBox(){
      if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
          dvd.xspeed *= -1;
          pickColor();
      }
          
      if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
          dvd.yspeed *= -1;
          pickColor();
      }    
  }
  
  //Pick a random color in RGB format
  function pickColor(){
      r = Math.random() * (254 - 0) + 0;
      g = Math.random() * (254 - 0) + 0;
      b = Math.random() * (254 - 0) + 0;
  
      logoColor = 'rgb('+r+','+g+', '+b+')';
  }`,
  (err) => {
    if (err) throw err;
  }
);
console.log("js homepage made");

exec("cd nPop && git init", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
  console.log("opening default code editor");
});

exec("echo git initted", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
  console.log("opening default code editor");
});

const donus = function () {
  exec("cd nPoP && npm run pop", (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }
    console.log("pop script starting");

    console.log(data);
  });
};
const doonus = function () {
  exec("cd nPoP && code .", (error, data) => {
    if (error) {
      console.log("error", error.message);
      return;
    }

    console.log(data);
    console.log("opening default code editor");
  });
};

setTimeout(() => {
  donus();
  doonus();
}, 15000);
