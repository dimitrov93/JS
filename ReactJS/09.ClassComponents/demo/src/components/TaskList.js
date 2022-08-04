import { Component } from "react";
import { TaskContext } from "../contexts/TaskContext";
import withRouter from "../hoc/withRouter";
import TaskItem from "./TaskItem";




class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { title: "Task 11", isCompleted: false },
        { title: "Task 22", isCompleted: false },
        { title: "Task 33", isCompleted: false },
      ],
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
      tasks: [...state.tasks, { title: state.newTask, isCompleted: false }],
      newTask: "",
    }));
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/4")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ character: result });
      });
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  taskClickHandler(taskTitle) {
    this.setState(state => ({
        tasks: state.tasks.map(x => x.title === taskTitle ? {...x, isCompleted: !x.isCompleted} : x)
    }))
  }

  taskDeleteHandler(e, taskTitle) {
    e.stopPropagation()
    this.setState(state => ({
        tasks: state.tasks.filter(x => x.title !== taskTitle)
    }))
  }

  render() {
    return (
      <TaskContext.Provider value={{taskDeleteHandler: this.taskDeleteHandler.bind(this)}}>
        <h2>Currect Character: {this.state.character.name} </h2>

        <ul>
          {this.state.tasks.map((x) => (
            <TaskItem 
            key={x + x.title} 
            title={x.title} 
            isCompleted={x.isCompleted} 
            onClick={this.taskClickHandler.bind(this)}
            />
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
      </TaskContext.Provider>
    );
  }
}

export default withRouter(TaskList);
