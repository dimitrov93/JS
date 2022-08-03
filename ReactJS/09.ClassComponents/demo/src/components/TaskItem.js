import { Component } from "react";

class TaskItem extends Component {
    render() {
      return (
        <ul>
          <li>{this.props.title}</li>
        </ul>
      );
    }
  }
  
  export default TaskItem;
  