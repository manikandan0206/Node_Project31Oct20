const events = require('events');
const myEmitter = new events.EventEmitter();

/**
 * this is listener function here we have used addListener
 * Instead of addListener we can use on
 */
module.exports.myFunction =  () => {
    myEmitter.addListener('my',()=>{
        var x = ['Apple', 'Orange', 'Bannan'];
        for( let i = 0 ; i<x.length; i++  ){
            console.log(i + " "+x[i]);
        }
        console.log('oooops Emitter fired');   
    })
}

setTimeout(()=>{
    myEmitter.emit('my');
}, 3000);