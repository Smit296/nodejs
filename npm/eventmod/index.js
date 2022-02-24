
const EventEmmiter = require("events");
const event = new EventEmmiter();

event.on('sayName',()=>{
    console.log("your name is smit");
});
event.on('callBack',(sc,msg)=>{
    console.log(`your code status is ${sc} and code is ${msg}`);
})
event.emit("sayName");
event.emit("callBack",200,"ok");