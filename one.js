/**
 * call variable
 */
 module.exports.myVar = 123;

/**
 * function return string to index.js
 */
module.exports.myFunc = async (num1 , num2) =>{
   try{
       let sum = num1 + num2;
   console.log(" Sum of two number :"+sum );
   }
   catch{

   }
}

/**
 * class with function
 */

 module.exports.myClass =  class myClass {
    constructor(name){
         this.name = name;
     }
     classFunction(){
         console.log("my name is "+this.name)
     }
     
 }

