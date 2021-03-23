import React, {Fragment} from "react";
import './App.css';
import InputTodo from "./Components/InputTodo";
import ListTodod from "./Components/ListTodo";
function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      <ListTodod/>
      </div>

    </Fragment>
  );
}

export default App;
