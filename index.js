const express = require('express');
const app = express();
app.use(express.json());

const notes = [];

//Post - create a note 
app.post("/notes",function(req,res){
    const note = req.body.note;
    notes.push(note);

    res.json({
        message : "Done"
    })
})


//Get - get all my notes
app.get("/notes",function(req,res){
    res.json({
        notes
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Frontend/index.html")  //dirname is a global variable that gives the current directory path and /index.html is the file name
})

app.listen(3000);
