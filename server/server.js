const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const uri ='mongodb+srv://dbuser1:myyoutubevideopassword@cluster0.jvgsygz.mongodb.net/?retryWrites=true&w=majority'

app.use(cors()); // middleware

mongoose.connect(uri); // connect to db 

// creating schema
const tutSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

// creating model(collection)
const collection = new mongoose.model('tut',tutSchema);


// to show data in the browser. 
app.get("/",(req, res) =>{
    res.send("server is running");
});

// to get the data in backend from database and then send to front end 
app.get("/api", async (req, res)=>{

    const result = await collection.find();

    res.send(result);  // to see data in postman

});



app.listen(5000,()=>{console.log("server started on port 5000")});



// steps 

//1.mongodb connect 
/* 2. schema and collection make 
3. end points make 
4. show in front end 

*/
 