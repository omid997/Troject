import React from "react";
import { addTask } from "../redux/actions";
import { connect } from "react-redux";
import Group from "./Group";
import AddGroupForm from "./AddGroupForm";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-title">
          Troject | A Simple Task Manager built with React and Redux
        </div>
        <div className="groups-wrapper">
          {this.props.groups.map(group => (
            <Group key={`group-${group.id}`} {...group} />
          ))}
          <AddGroupForm />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    groups: state.groups
  };
};

export default connect(
  mapStateToProps,
  { addTask }
)(App);
