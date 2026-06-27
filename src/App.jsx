import { use, useState } from "react";
import Task from "./component/Task/Task";
import AddTaskModal from "./component/AddTaskModal/AddTaskModal";

import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [filterBy, setFilterBy] = useState("all");

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

  const completeTask = (taskId) => {
    const newTasksList = tasksList.map((task) => {
      if (task.id == taskId) {
        task.isCompleted = true;
      }

      return task;
    });

    setTasksList(newTasksList);
  };

  const removeTask = (taskId) => {
    const newTasksList = tasksList.filter((task) => {
      return task.id != taskId;
    });

    setTasksList(newTasksList);
  };

  const filterByHandler = () => {
    if (filterBy == "all") {
      return tasksList;
    } else if (filterBy == "completed") {
      return tasksList.filter((task) => task.isCompleted == true);
    } else {
      return tasksList.filter((task) => task.isCompleted == false);
    }
  };

  return (
    <>
      <main className={isShowModal ? "blur-main" : ""}>
        <nav>
          <h1>Task Management</h1>
          <div className="buttons">
            <button
              className="add-task-btn"
              onClick={() => setIsShowModal(true)}
            >
              add task
              <img src="./public/plus.png" alt="add task icon" />
            </button>
            <div className="custom-dropdown">
              <button className="dropdown-btn">
                <span>filter by</span>
                <img src="./public/down.png" alt="drop down icon" />
              </button>

              <div className="dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => setFilterBy("all")}
                >
                  all
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => setFilterBy("completed")}
                >
                  completed
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => setFilterBy("not-completed")}
                >
                  not completed
                </div>
              </div>
            </div>
          </div>
        </nav>

        <hr />

        <div className="existing-tasks">
          <h2>Existing Tasks : </h2>
          {
            filterByHandler().map((task) => {
              return (
                <Task
                  key={task.id}
                  {...task}
                  completeTask={completeTask}
                  removeTask={removeTask}
                ></Task>
              );
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
              return (
                <Task key={task.id} {...task} removeTask={removeTask}></Task>
              );
            })}
        </div>
      </main>

      {isShowModal && (
        <AddTaskModal
          closeModal={() => setIsShowModal(false)}
          addTask={addTask}
        ></AddTaskModal>
      )}
    </>
  );
}

export default App;
