import React, { Component } from "react";
import Todo from "./todo";
import AddTodo from "./addtodo";

class Todolist extends Component {
  state = {
    addTodoValue: "",
    todos: [
      {
        id: 1,
        value: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        value: "Mengerjakan Assignment",
        completed: false,
      },
      {
        id: 3,
        value: "todo 3",
        completed: false,
      },
    ],
  };

  getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo;
    });
    this.setState({ todos });
  };

  handleDone = (todo) => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    this.setState({ todos });
  };

  addNewTodo = (value) => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push({
        id: this.getTime(),
        value: value,
        completed: false,
      });
      this.setState({ addTodoValue: "", todos });
    } else {
      console.log("Please Add Todo Text");
    }
  };

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">
              <AddTodo
                fooAddTodo={this.addNewTodo}
                addTodoValue={this.state.addTodoValue}
              />
            </td>
          </tr>
          {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                index={index + 1}
                todo={todo}
                fooDelete={this.handleDelete}
                fooDoneDone={this.handleDone}
              />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Todolist;
