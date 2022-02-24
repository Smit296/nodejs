/*const fs=require("fs");
//fs.writeFileSync("read.txt","My name is smit donga");
//fs.appendFileSync("read.txt","My father name is rajeshbhai");

//const buf_data=fs.readFileSync("readwrite.txt","utf8");
//console.log(buf_data);
//console.log(buf_data.toString());

//fs.renameSync("read.txt","readwrite.txt");

//fs.unlinkSync("readwrite.txt");

//fs.rmdirSync("");

/*fs.writeFile("read.txt","i am smit donga",(err)=>{console.log("file is created");
console.log(err);
});

fs.readFile("read.txt",'UTF-8',(err,data)=>{console.log(data);

});*/


const {add,sub} = require('./exmod');
/*console.log(local);
console.log(local.add(5, 5));
console.log(local.sub(10 , 5));*/

console.log(add(5, 5));
console.log(sub(10 , 5));