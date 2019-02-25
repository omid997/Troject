import React from "react";
import { connect } from "react-redux";
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";
import "../styles/group.css";

class Group extends React.Component {
  render() {
    return (
      <div className="group">
        <div className="group-content">
          <div className="group-title">{this.props.title}</div>

          <div className="tasks-list">
            <span className="tasks-list-title">Pending:</span>
            {this.props.thisGroupPendingTasks.map(task => (
              <Task key={`task-${task.id}`} {...task} />
            ))}
          </div>

          <div className="tasks-list">
            <span className="tasks-list-title">Done:</span>
            {this.props.thisGroupDoneTasks.map(task => (
              <Task key={`task-${task.id}`} {...task} />
            ))}
          </div>

          <AddTaskForm groupId={this.props.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, selfProps) => {
  return {
    thisGroupDoneTasks: state.tasks.filter(
      task => task.groupId == selfProps.id && task.status
    ),
    thisGroupPendingTasks: state.tasks.filter(
      task => task.groupId == selfProps.id && !task.status
    )
  };
};
export default connect(mapStateToProps)(Group);
