import { useState } from "react";

const CreateTask = ({taskCreateHandler}) => {

    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        taskCreateHandler(task)
        setTask('')
    }

    const onChange = (e) => {
        setTask(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                id="task-name"
                type="text" 
                name="taskName" 
                value={task} 
                onChange={onChange}
                placeholder="Do the dishes" 
            />
            <input type="submit" value="add" />
        </form>
    );
}

export default CreateTask