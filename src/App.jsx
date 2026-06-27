import { useState } from "react";
import Task from "./component/Task/Task";
import AddTaskModal from "./component/AddTaskModal/AddTaskModal";

import "./App.css";

function App() {

  const [isModalShow,setIsModalShow]=useState(false)

  return (
    <>
      <main className="">
        <nav>
          <h1>Task Management</h1>
          <div className="buttons">
            <button className="add-task-btn" onClick={()=>setIsModalShow(true)}>
              add task
              <img src="./public/plus.png" alt="" />
            </button>
            <select>
              <option value="all tasks">all tasks</option>
              <option value="completed tasks">completed tasks</option>
              <option value="not completed task">not completed task</option>
            </select>
          </div>
        </nav>

        <hr />

        <div className="existing-tasks">    
          <h2>Existing Tasks : </h2>
          <Task></Task>
        </div>

        <hr />

        <div className="completed-tasks">
          <h2>Completed Tasks : </h2>
          <Task></Task>
        </div>
      </main>

      {isModalShow&&<AddTaskModal closeModal={()=>setIsModalShow(false)}></AddTaskModal>}
    </>
  );
}

export default App;
