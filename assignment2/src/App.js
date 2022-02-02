import { useState, useRef } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);
  const inpRef = useRef();

  const addTask = () => {
    const task = inpRef.current.value;
    setTask((curTasks) => [...curTasks, task]);
    console.log(task);
  };

  const markDone = (idx) => {
    let tmpArr = new Array(...tasks);
    let tmpTask = tmpArr[idx];

    setCompletedTask((tasks) => {
      console.log(tmpArr);

      return [...tasks, tmpTask];
    });

    delete tmpArr[idx];

    tmpArr = tmpArr.filter((ele) => ele);

    setTask(tmpArr);
  };

  const removeTask = (idx) => {
    let tmpArr = new Array(...tasks);

    delete tmpArr[idx];

    tmpArr = tmpArr.filter((ele) => ele);

    setTask(tmpArr);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input id="inpTask" placeholder="Input Task" ref={inpRef} />
      <button onClick={addTask}>Add Task</button>
      <br />

      <div id="taskContainer">
        {tasks.map((task, idx) => (
          <Task
            task={task}
            idx={idx}
            markDone={markDone}
            removeTask={removeTask}
          />
        ))}
      </div>

      {completedTasks.length > 0 ? (
        <div id="completedTasksContainer">
          <h3>The following tasks have been completed</h3>
          <ul>
            {completedTasks.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

const Task = ({ task, idx, markDone, removeTask }) => {
  return (
    <div className="task">
      <p>{task}</p>

      <div className="iconContainer">
        <FiCheck
          color="green"
          onClick={() => {
            markDone(idx);
          }}
        />

        <FiX
          color="red"
          onClick={() => {
            removeTask(idx);
          }}
        />
      </div>
    </div>
  );
};

export default App;
