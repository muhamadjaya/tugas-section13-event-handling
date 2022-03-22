import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <>
        <td style={{ width: 15 }} className="text-center">
          <input
            type="checkbox"
            defaultChecked={this.props.todo.completed}
            onChange={() => this.props.fooDoneDone(this.props.todo)}
          />
        </td>
        <td>{this.renderTodo()}</td>
        <td style={{ width: 100 }} className="text-center">
          <button
            onClick={() => this.props.fooDelete(this.props.todo.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </>
    );
  }

  renderTodo() {
    if (this.props.todo.completed)
      return (
        <s>
          <i>{this.props.todo.value}</i>
        </s>
      );
    else return this.props.todo.value;
  }
}

export default Todo;
