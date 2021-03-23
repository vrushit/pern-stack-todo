import React, { Fragment, useEffect, useState } from 'react'

function ListTodo() {

    const [todos, setTodos] = useState([]);


    const getTodos = async() => {
        try{

            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            // console.log(jsonData)

            setTodos(jsonData)
        }
        catch(err){
            console.error(err.message)
        }
    }

    //delete function
    const deleteTodo = async(id) => {
        try{

            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method:"DELETE",
                
            });


        }
        catch(err)
        {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        
        {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>

            </tr>
        ))}
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodo
