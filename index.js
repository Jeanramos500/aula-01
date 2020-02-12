var express = require ('express');

var server = express();

//http://localhost:3000/

server.get('/',(request, Response)=>{
    Response.send('Hello Word!');
})

server.listen(3333);