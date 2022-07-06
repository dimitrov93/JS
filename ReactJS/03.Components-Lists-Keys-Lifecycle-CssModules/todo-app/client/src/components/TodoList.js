import { TodoItem } from "./TodoItem"
import {useEffect, useState} from 'react';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                console.log(Object.values(result));
                setTodos(Object.values(result));
            } )
    }, [])

    return (
        <table className="table">
        <thead>
          <tr>
            <th className="table-header-task">Task</th>
            <th className="table-header-status">Status</th>
            <th className="table-header-action">Action</th>
          </tr>
        </thead>
        <tbody>
            {todos.map(x => <TodoItem key={x._id} {...x} />)}
            
        </tbody>
      </table>
    )
}