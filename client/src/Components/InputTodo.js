import React, {Fragment, useState} from 'react'

const inputTodo=()=> {

    const [description, setDescription] = useState("");

    return (
       <Fragment>
           <h1 className="text-center mt-5">
               Pern Todo List
           </h1>
           <form className="d-flex mt-5">
            <input type="text" className="form-control"/>
            <button className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default inputTodo
