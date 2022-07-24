import { useEffect } from "react";

const TaskItem = ({ title, taskDeleteHandler, taskId }) => {

  useEffect(() => {
    console.log("Mounted");
    
    return () => {
        console.log("unMounted");
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
