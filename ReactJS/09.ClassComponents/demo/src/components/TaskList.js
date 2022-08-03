import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["Task 11", "Task 22", "Task 33"],
      filter: "all",
      newTask: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(e) {
    console.log("On Change");
    console.log(e.target.value);
    this.setState({ newTask: e.target.value });
  }

  render() {
    return (
      <ul>
        {this.state.tasks.map((x) => (
          <TaskItem key={x} title={x} />
        ))}

        <form>
          <label htmlFor="new-task" />
          <input
            type="text"
            id="new-task"
            name="newTask"
            value={this.state.newTask}
            // onChange={this.onChangeHandler.bind(this)}
            onChange={this.onChangeHandler}
          />

          <input type="submit" value={"add"} />
        </form>
      </ul>
    );
  }
}

export default TaskList;
