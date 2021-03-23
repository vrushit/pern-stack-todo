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
            <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td><button className="btn btn-danger">Delete</button></td>

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
