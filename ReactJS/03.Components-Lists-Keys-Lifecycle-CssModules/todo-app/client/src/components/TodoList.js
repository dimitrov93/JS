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

    const todoClickHandler = (todo) => {
            fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({...todo, isCompleted: !todo.isCompleted})
            })
            .then(res => res.json())
            .then(modifiedTodo => {
                setTodos(oldTodos => oldTodos.map(todo => todo._id == modifiedTodo._id ? modifiedTodo : todo))
                // setTodos(state => state.map(x => x._id == todoId ? {...x, isCompleted: !x.isCompleted} : x))
              })

    };

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
            {todos.map(x => <TodoItem key={x._id} {...x} onClick={todoClickHandler} />)}
            
        </tbody>
      </table>
    )
}