const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//Routes///

//Create a todo

app.post("/todos", async(req, res)=>{
    // async await
    try{

    const {description} = req.body;
    const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description] 
    );

    res.json(newTodo);

    }
    catch(err){
        console.error(err.message)
    }
})

//Fetch All todo
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)

    }
    catch(err){
            console.error(err.message)
    }
})

//Fetch a Todo

//Update a Todo

//Delete a Todo



app.listen(5000, () => {
    console.log("Server has started on port 5000")
})