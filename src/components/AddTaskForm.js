import React from "react";
import { addTask } from "../redux/actions";
import { connect } from "react-redux";
import { getNow } from "../getNow";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  updateInput = input => {
    this.setState({
      input
    });
  };

  handleAddTask = () => {
    if (this.state.input.length < 3) {
      alert("Task title must contain at least three letter");
      return;
    }
    this.props.addTask({
      title: this.state.input,
      groupId: this.props.groupId,
      status: false,
      date: getNow()
    });
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          className="input"
          placeholder="New Task..."
        />
        <button onClick={this.handleAddTask} className="submit">
          Add
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(AddTaskForm);
