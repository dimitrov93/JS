import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["Task 11", "Task 22", "Task 33"],
      filter: "all",
      newTask: "",
      character: [],

    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    console.log("On Change");
    console.log(e.target.value);
    this.setState({ newTask: e.target.value });
  }

  addNewTaskHandler(e) {
    e.preventDefault();
    this.setState((state) => ({
      tasks: [...state.tasks, state.newTask],
      newTask: "",
    }));
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/4')
        .then(res => res.json())
        .then(result => {
            this.setState({character: result})
        })
    console.log('did mount');
  }

  componentDidUpdate() { 
    console.log('did update');
  }

  render() {
    return (
      <>
        <h2>Currect Character: {this.state.character.name} </h2>


        <ul>
          {this.state.tasks.map((x) => (
            <TaskItem key={x} title={x} />
          ))}
        </ul>

        <form onSubmit={this.addNewTaskHandler.bind(this)}>
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
      </>
    );
  }
}

export default TaskList;
