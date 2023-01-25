const http = require('http'); 

const port = 8081;

const toDoList = ["Complete Node Byte","Play Cricket"];

http
  .createServer((request, response) =>{
    const {method, url} = request;
    
    if(url ==="/todos")
    {
      if(method === "GET")
      {
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(toDoList.toString());
      }
      else if(method === "POST"){
        let body ="";
        request.on('error',(err)=>{
          console.error(err);
        })
        .on("data",(chunk)=>{
          body += chunk;
          console.log(chunk);
        })
        .on("end",()=>{
          body = JSON.parse(body);
          console.log("data: ",body);
        });
      }
      else{
        response.writeHead(501);
      }
    }else{
      response.writeHead(404);
    }
    response.end();  //compulsory
})
  .listen(port, ()=>{
    console.log(`Nodejs server started on port ${port}`);
});

// http://localhost:8081
