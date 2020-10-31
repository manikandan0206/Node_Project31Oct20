const crypto = require('crypto');

module.exports.myFunction = () =>{
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                       .update('I love cupcakes')
                       .digest('hex');
    console.log(hash);
} 
