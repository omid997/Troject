import React from "react";
import { addGroup } from "../redux/actions";
import { connect } from "react-redux";
import "../styles/addgroupform.css";

class AddGroupForm extends React.Component {
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

  handleaddGroup = () => {
    this.props.addGroup(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="addGroupFormWrapper">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          className="input"
          placeholder="New Task Group..."
        />
        <button onClick={this.handleaddGroup} className="submit">
          Add
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addGroup }
)(AddGroupForm);
