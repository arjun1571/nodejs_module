const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('this is home page');
        res.end();
    }
    else if(req.url==='/about'){
        res.write('this is about page');
        res.end();
    }
    else if(req.url==='/content'){
        res.write('this is content page');
        res.end();
    }
    else {
        res.write('not found');
        res.end();
    }

});



server.listen(3000);

console.log('leating on port on 3000');