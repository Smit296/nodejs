const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    //const data=fs.readFileSync(`${__dirname}/api.json`,"utf-8");
    //const objdata=JSON.parse(data);
    //res.end(objdata[0].name);

   // console.log(req.url);
    if(req.url=="/")
    {
        res.end("home page");
    }
    else if(req.url=="/about")
    {
        res.end("about us page");
    }
    else if(req.url=="/api")
    {    
        fs.readFile(`${__dirname}/api.json`,"utf-8",(err,data)=>{  
        // console.log(data);
            const objdata=JSON.parse(data);
            console.log(objdata[0].id);
            res.end(objdata[0].id.toString());
        });
    }
    else
    {
        res.writeHead(404,{"content-type" : "text/html"});
        res.end("<h1>404 page not found</h1>");
    }
    //res.end("hello smit");
    
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listen 8000");
});