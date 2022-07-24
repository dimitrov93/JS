import { useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TastContext";

const TaskItem = ({ title, taskDeleteHandler, taskId }) => {

  const value = useContext(TaskContext)

  console.log(value);

  useEffect(() => {
    // console.log("Mounted");
    
    return () => {
        // console.log("unMounted");
    }
  }, []);

  return (
    <li>
      {title}
      <button onClick={() => taskDeleteHandler(taskId)}>x</button>
    </li>
  );
};

export default TaskItem;
