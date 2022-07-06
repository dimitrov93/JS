export const TodoItem = (props) => {
    return (
        <tr className={`todo ${props.isCompleted ? 'is-completed' : ''}`}>
        <td>{props.text}</td>
        <td>{props.isCompleted ? "Completed" : "InCompleted"}</td>
        <td className="todo-action">
          <button className="btn todo-btn">Change status</button>
        </td>
      </tr>
    )
}