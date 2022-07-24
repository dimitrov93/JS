import { useState } from "react";

const CreateTask = () => {

    const [task, setTask] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
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