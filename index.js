
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

 globalMyEmitter.myFunction();

 