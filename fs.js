const fs = require('fs');

 fs.readFile('myFile.txt','utf-8',(err,data)=>{
    console.log(data);
 });

 console.log('hi');
