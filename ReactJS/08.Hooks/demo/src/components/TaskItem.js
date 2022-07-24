import { useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TastContext";
import styles from './TaskItem.module.css'

const TaskItem = ({ task }) => {

  const {taskDeleteHandler, toggleTask} = useContext(TaskContext)


  useEffect(() => {
    // console.log("Mounted");
    
    return () => {
        // console.log("unMounted");
    }
  }, []);

  const classNames = [
    task.isCompleted ? styles.completed : '',
    styles['task-item']
  ]

  return (
    <li>
      <span 
      className={classNames.join(' ')}
      onClick={() => toggleTask(task)}
      >
        {task.title}
      </span>
      <button onClick={() => taskDeleteHandler(task._id)}>x</button>
    </li>
  );
};

export default TaskItem;
