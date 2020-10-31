const fs = require('fs');
const path = require('path');

module.exports.myFunction = () => {
    //D:\node_project
    console.log(__dirname);
    //D:\node_project\myFileSystem.js
    console.log(__filename);
    /**
     * join path
     * D:\node_project\test\test.js
     */
    console.log(path.join(`${__dirname}/test/test.js`));
}


module.exports.myFunctionOne = () => {
    // syntax 
    // fs.mkdir(path, fileName, callback)
    fs.mkdir(path.join(__dirname, 'test'), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
        //syntax 
        // fs.writeFile(path, data, callback)
        fs.writeFile(path.join(`${__dirname}/test/test.js`), 'I love Node', err => {
            if (err) console.log(err);
            console.log('File is created');
        });
    });

}


module.exports.myFunctionTwo = () => {
    // syntax
    // fs.readFile( filename, encoding, callback_function )
    fs.readFile(path.join(`${__dirname}/test/test.js`), "utf8", (err, data) => {
        if (err) console.log(err);
        console.log(data);
    })
}

module.exports.myFunctionThree = () => {
    // fs.appendFile(path.join(`${__dirname}/test/test.js`), 'I love India \n', (err) => {
    //     if (err) console.log(err);
    //     console.log('File is created');
    // });
    fs.appendFile(path.join(`${__dirname}/test/test.js`), " - GeeksForGeeks",
        { encoding: "latin1", mode: 0o666, flag: "a" },
        (err) => {
            if (err) {
                console.log(err);
            }
        });
}