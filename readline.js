/**
 * readline which is coremodule or inbuild module
 * method which get dynamic value from user and display
 */

const readline = require('readline');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * getting dynamic input from user and print the output
 */

module.exports.myFunction = () => {
    r1.question('what is your Name? ', (ans) => {
        console.log("Your Name is " + ans);
        r1.close();
    })
}

/**
 * getting dynamic input from user and print the output
 * get text and validate is close or not
 */
module.exports.myFunctionOne = () => {
    r1.question(' Please type close  ', (ans) => {
        if (ans === "close") {
            r1.close();
        } else {
            r1.setPrompt("Wrong value try Again..!");
            r1.prompt();
            // on is listiner
            r1.on('line', (inp) => {
                if (inp === 'close') {
                    r1.close();
                } else {
                    r1.setPrompt(inp + 'wrong \n');
                    r1.prompt();
                }
            })
        }
    })
}

/**
 * validate the age of user
 */

module.exports.myFunctionTwo = () => {
    r1.question('Please Enter Your age', (age) => {
        if (isNaN(age)) {
            r1.setPrompt("Wrong value try Again..!");
            r1.prompt();
            // on is listener
            r1.on('line', (inp) => {
                if (!isNaN(inp)) {
                    r1.close();
                } else {
                    r1.setPrompt(inp + 'wrong \n');
                    r1.prompt();
                }
            })
        } else {
            console.log(' Your age is:' + age);
            r1.close();
        }
    });

}

r1.on('close', () => {
    console.log('correct !!!!');
})