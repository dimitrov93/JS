import TaskList from "./components/TaskList";
import styles from "./App.module.css";
import CreateTask from "./components/CreateTask";
import useFetch from "./hooks/useFetch";
import useTodosAPI from "./hooks/useTodos";

import { TaskContext } from "./contexts/TastContext";

function App() {
  const [task, setTask, isLoading] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );
  const { removeTodo, createTodo, updateTodo } = useTodosAPI();

  const taskCreateHandler = async (newTask) => {
    const createdTask = await createTodo(newTask);

    setTask((state) => [...state, createdTask]);
  };

  const taskDeleteHandler = async (taskId) => {
    await removeTodo(taskId);
    setTask((state) => state.filter((x) => x._id != taskId));
  };

  const toggleTask = async (task) => {
    const updatedTask = {...task, isCompleted: !task.isCompleted}
    await updateTodo(task._id, updatedTask)
    setTask(state => state.map(x => x._id == task._id ? updatedTask : x))
  }

  const taskEditHandler = async (task, newTitle) => {
    const updatedTask = {...task, title: newTitle};

    await updateTodo(task._id, updatedTask)

    setTask(state => state.map(x => x._id == task._id ? updatedTask : x))

  } 

  return (
    <TaskContext.Provider value={{ task, taskDeleteHandler, toggleTask, taskEditHandler }}>
      <div className={styles["site-wrapper"]}>
        <header>
          <h1> to do App</h1>
        </header>

        <main>
          {isLoading ? <p>Loading...</p> : <TaskList tasks={task} />}
          <CreateTask taskCreateHandler={taskCreateHandler} />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
