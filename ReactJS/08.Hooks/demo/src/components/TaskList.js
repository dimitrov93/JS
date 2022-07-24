import { useContext } from "react";
import { TaskContext } from "../contexts/TastContext";
import TaskItem from "./TaskItem";


const TaskList = () => {
  const {task}  = useContext(TaskContext);
  return (
    <ul>
      {task.map((x) => (
        <TaskItem
          key={x._id}
          task={x}
        />
      ))}
    </ul>
  );
};

export default TaskList;
