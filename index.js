//create simple server connectivity at localhost:4500

    const http = require('http');
// importing json data by data.js 
    const data = require('./data');

    http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();  
    }).listen(4500);
//get argument by user input
    const input = process.argv;
//importing file system
    const fs = require('fs');
// use userinput condition for this 
    //  we need to start server like below 
        if(input[2]=='add'){
            // node index.js add hello.txt "omg this is very good"
            fs.writeFileSync(input[3],input[4])
        }else if(input[2]=='remove'){
            // node index.js remove hello.txt "omg this is very good"
            fs.unlinkSync(input[3])
        }else{
            // node index.js abc hello.txt "omg this is very good"
            console.log('invalid input');
        }
