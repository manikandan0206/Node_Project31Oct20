
/**
 * import one.js and call using the instant of one.js
 * Calling function from one.js by module.export method
 */
const global = require('./one');

/**
 * call variable
 */
// console.log(global.myVar); 

/** calling a function */
// global.myFunc(2,3);

/**
 * calling a class
 * to call a class we need to create object
 * by using the object we can call class and function with the class
 */

//  var classObj = new global.myClass('Manikandan');
//  classObj.classFunction();

/**
 * calling readline file
 */

var globalReadLine = require('./readline');
/**
 * call simple function return your name
 */

// globalReadLine.myFunction();

/** 
* call function and valid enter text is close or not
*/

// globalReadLine.myFunctionOne(); 

/**
 * call function and valid age of user
 */

//  globalReadLine.myFunctionTwo();

/**
 * call event emitter function
 */

var globalMyEmitter = require('./eventEmitter');

//  globalMyEmitter.myFunction();

var globalMyCrypto = require('./Mycrypto');

// globalMyCrypto.myFunction();

/**
 * explain about path and file system core module
 */
var globalMyFileSystem = require('./myFileSystem');
// path
// globalMyFileSystem.myFunction();
/**
 * create file and write into that file
 */
// globalMyFileSystem.myFunctionOne();
// globalMyFileSystem.myFunctionTwo();
// globalMyFileSystem.myFunctionThree();

// my server
const http = require('http');

/**
 * basic url will get only home page
 */

/* const app = http.createServer((req,res)=>{
    res.end('<h1>HOME</h1>');
}); */

/**
 * dynamic content based on dynamic url
 */
/*  const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('<h1>HOME</h1>');
    }
    if(req.url === '/service'){
        res.end('<h1>SERVICE</h1>')
    }
    if(req.url === '/about'){
        res.end('<h1>ABOUT</h1>')
    }
}); */

/**
 * get dynamic page with dynamic url alone with HTML
 */
const fs = require('fs');
const path = require('path');
const app = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile(path.join(`${__dirname}/Home.html`),"utf8",(err,data)=>{
            if(err) {throw err}
            res.end(data);
        })
    }
    if(req.url === '/service'){
        fs.readFile(path.join(`${__dirname}/Service.html`),"utf8",(err,data)=>{
            if(err) {throw err}
            res.end(data);
        })
    }
    if(req.url === '/about'){
        var x  = [{"id":1,"name":"manikandan"}]
        res.writeHead(200, {'content-type':'application/json'})
        res.end(JSON.stringify(x));
    }
})


const PORT = process.env.PORT || 2500;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
