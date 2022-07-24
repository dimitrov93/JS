import TaskList from "./components/TaskList";
import styles from "./App.module.css";
import CreateTask from "./components/CreateTask";
import { useState, useId, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import useTodosAPI from "./hooks/useTodos";

function App() {
  // const [task, setTask] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3030/jsonstore/todos")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setTask(Object.values(result));
  //     });
  // }, []);

  const [task, setTask, isLoading] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );
  const  removeTodo  = useTodosAPI();
  const taskCreateHandler = (newState) => {
    setTask((state) => [
      ...state,
      {
        _id: state[state.length - 1]?._id + 1 || 1,
        title: newState,
      },
    ]);
  };

  const taskDeleteHandler = async (taskId) => {
    await removeTodo(taskId);
    setTask((state) => state.filter((x) => x._id != taskId));
  };

  return (
    <div className={styles["site-wrapper"]}>
      <header>
        <h1> to do App</h1>
      </header>

      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TaskList tasks={task} taskDeleteHandler={taskDeleteHandler} />
        )}
        <CreateTask taskCreateHandler={taskCreateHandler} />
      </main>
    </div>
  );
}

export default App;
