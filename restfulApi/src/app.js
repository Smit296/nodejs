const express = require("express");
const Student=require("./models/students");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000 

/*app.post("/",(req,res)=>
{
    res.send("connect to express");
})*/

app.use(express.json());

app.post("/students" , (req,res)=>
{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>
    {
        res.status(201).send(user);
    }).catch((err)=>
    {
        res.status(400).send(err);
    })
    //res.send(user);

})

app.get("/students",async(req,res)=>
{
    try{
      const studentsData = await Student.find();
      res.send(studentsData);
    }
    catch(e)
    {
        res.send(e);
    }
})


app.get("/students/:id",async(req,res)=>
{
    try{
      const _id=req.params.id;
      //object distructring means key and value name is same
      const studentData=await Student.findById(_id);
      console.log(studentData);

      if(!studentData)
      {
          return res.status(404).send();
      }
      else{
          res.send(studentData);
      }

    }
    catch(e)
    {
        res.send(e);
    }
})

/*app.delete("/students/:id",async(req,res)=>
{
    const id=req.params.id;
    const studentData=await Student.findByIdAndDelete({_id:id});
    if(!studentData)
    {
        return req.status(404).send();
    }
    else
    {
        res.send(studentData);
    }
})*/

app.patch("/students/:id",async(req,res)=>
{
    try{
        const _id=req.params.id;
        const studentData=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });

        res.status(404).send(studentData);
        console.log(studentData);
       
    }
    catch(e)
    {
        res.status(400).send(e);
    }
})


app.listen(port,()=>
{
    console.log((`connection on port ${port}`));
})

