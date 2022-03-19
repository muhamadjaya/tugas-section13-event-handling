import React, { Component } from "react";
import "./App.css";
import Todolist from "./components/todolist";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">todos</h1>
        <Todolist />
      </div>
    );
  }
}

export default App;
