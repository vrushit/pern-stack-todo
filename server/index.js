const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json())

//Routes///

//Create a todo

app.post("/todos", async(req, res)=>{
    // async await
    try{}
    catch(err){
        console.log(err.message)
    }
})

//Fetch All todo


//Fetch a Todo

//Update a Todo

//Delete a Todo



app.listen(5000, () => {
    console.log("Server has started on port 5000")
})