import { useState } from "react";
import Task from "./component/Task/Task";
import AddTaskModal from "./component/AddTaskModal/AddTaskModal";

import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);

  const addTask = (taskTitle, taskCaption, isImportant) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000000),
      isCompleted: false,
      taskTitle,
      taskCaption,
      isImportant,
    };

    setTasksList([...tasksList, newTask]);
  };
  return (
    <>
      <main className="">
        <nav>
          <h1>Task Management</h1>
          <div className="buttons">
            <button
              className="add-task-btn"
              onClick={() => setIsModalShow(true)}
            >
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
          {tasksList
            .filter((task) => {
              return task.isCompleted == false;
            })
            .map((task) => {
              return <Task key={task.id} {...task}></Task>;
            })}
        </div>

        <hr />

        <div className="completed-tasks">
          <h2>Completed Tasks : </h2>
          {tasksList
            .filter((task) => {
              return task.isCompleted == true;
            })
            .map((task) => {
              return <Task key={task.id} {...task}></Task>;
            })}
        </div>
      </main>

      {isModalShow && (
        <AddTaskModal
          closeModal={() => setIsModalShow(false)}
          addTask={addTask}
        ></AddTaskModal>
      )}
    </>
  );
}

export default App;
