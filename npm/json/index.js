const fs=require("fs");
const bigdata={
    name: "smit donga",
    age: 20,
    study: "charusat university",
};

const jsondata=JSON.stringify(bigdata);
/*fs.writeFile("json1.json",jsondata,(err)=>
{
    //console.log("done");
});*/
//const objdata=JSON.parse(jsondata);
//console.log(objdata);
//console.log(jsondata);

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data);
    console.log(data);
    console.log(orgdata);
})

