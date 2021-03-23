import React, { Fragment , useState} from 'react'

function EditTodo({todo}) {

    //update Descrption

    const updateDescription = async(e) =>{
        e.preventDefault();
        try{

        }
        catch(err){
            console.error(err.message);
        }
    }

    const [description, setDescription]=useState(todo.description);
    return (
        <Fragment>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal"
      onClick={e => updateDescription(e)}
      >Edit</button>

        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default EditTodo;
