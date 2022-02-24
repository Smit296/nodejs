const express = require('express');
const path=require('path');
const requests=require('requests');
const hbs =require('hbs');
const fs = require('fs');
const app = express();

console.log(path.join(__dirname,'../public'));

//path of the html file.
const staticpath = path.join(__dirname,'../public');
//path of the template directory and hbs file
const templatepath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials');
//app.use(express.static(staticpath));
app.set("view engine" , "hbs");

//change the name of view directory
app.set("views",templatepath);
hbs.registerPartials(partialspath);

app.get("",(req,res)=>{
    res.render("index",{
        name:"Donga's Techno.",
    });
})


/*app.get("/" , (req,res)=>{

    res.write("<h1>hello smit</h1>");
    res.write("<h1>hello smit</h1>");
    res.send();

});*/

app.get("/about",(req,res)=>
{
    
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=003243a6b1f948d7b8d9653f7df0f7cc`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
            
        console.log(`${arrData[0].name}`);
        //console.log(arrData[0].main.temp);

        res.write(arrData[0].name);
        
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });

    
});
/*
app.get("/temp",(req,res)=>
{
    //res.json();
    res.send([{
        id:1,
        name:"smit donga",
    }])
})
*/

app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"404 Page not found",

    });
})

app.listen(8000,()=>
{
    console.log("hello listen server");
}
);