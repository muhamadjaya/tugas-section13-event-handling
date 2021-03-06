import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    defaultValue: "",
    value: this.props.addTodoValue,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  clearInput = () => {
    document.getElementById("todoValue").value = "";

    this.setState({ value: "" });
  };

  addTodo = () => {
    this.props.fooAddTodo(this.state.value);
    this.clearInput();
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="todoValue"
          placeholder="Add todo..."
          onChange={this.handleChange}
        />
        <div className="input-group-append groupAppend">
          <button
            onClick={this.addTodo}
            className="btn btnAdd"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
