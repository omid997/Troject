import React from "react";
import { removeTask, toggleTask } from "../redux/actions";
import { connect } from "react-redux";
import "../styles/task.css";

class Task extends React.Component {
  handleRemoveClick = () => {
    if (confirm("Are you sure?")) {
      this.props.removeTask(this.props.id);
    }
  };
  handleToggleClick = () => {
    this.props.toggleTask(this.props.id);
  };
  render() {
    let deleteTaskButton;
    if (!this.props.status) {
      deleteTaskButton = (
        <button onClick={this.handleRemoveClick} className="deleteButton">
          Remove
        </button>
      );
    }
    return (
      <div className={`task ${this.props.status ? "done" : "pending"}`}>
        <button
          className="checkButton"
          type="checkbox"
          onClick={this.handleToggleClick}
          checked={this.props.status}
        >
          Check/Uncheck
        </button>
        {deleteTaskButton}

        <div className="task-info">
          <span className="task-title">{this.props.title}</span>
          <div className="task-date">{this.props.date}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { removeTask, toggleTask }
)(Task);
