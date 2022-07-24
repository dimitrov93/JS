import TaskList from "./components/TaskList";
import styles from "./App.module.css";
import CreateTask from "./components/CreateTask";
import { useState } from "react";

function App() {

  const [task, setTask] = useState([
    {_id: 0, title: 'first'},
    {_id: 1, title: 'second'},
    {_id: 2, title: 'third'},
  ]);

  const taskCreateHandler = (newState) => {
    setTask(state => [...state, 
        {
          _id:  state[state.length -1]._id +1,
          title: newState
        }
      ]);
  }

  return (
    <div className={styles['site-wrapper']}>
      <header>
        <h1> to do App</h1>
      </header>

      <main>
        <TaskList tasks={task}/>
        <CreateTask taskCreateHandler={taskCreateHandler} />
      </main>
    </div>
  );
}

export default App;
