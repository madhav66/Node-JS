
    const fs = require('fs');
    const path = require('path');
    const dirpath = path.join(__dirname,'filelists');//current dir path
// create file name apple and input some words in this file in working root path
    // fs.writeFileSync('apple.txt','hello world this is good');

// //create 5 file serialise 1 to 5 to files directory (dirpath)
    // for(i=1; i<=5; i++){
    //     fs.writeFileSync(`${dirpath}/abc ${i} .txt`,`wow nice {${i}}`)
    // }
// //remove 5 file serialiyse 1 to 5 by files directory (dirpath)
    // for(i=1; i<=5; i++){
    //     fs.unlinkSync(`${dirpath}/abc ${i} .txt`)
    // }
// fetch files as Array
    // fs.readdir(dirpath,(err,files)=>{
    //     console.warn(files)
    // })
// // fetch files as list
    // fs.readdir(dirpath,(err,files)=>{
    //     files.forEach((items)=>{
    //         console.log(items);
    //     })
    // })