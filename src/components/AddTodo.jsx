import React, { Component } from "react";
import TodoList from "./TodoList";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todos: [],
    };
  }

  handleOnChange = (e) => {
    this.setState({ todoName: e.target.value });
    console.log(this.state.todoName);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    let todo = { name: this.state.todoName };
    // let todoList = this.state.todos.push(todo);
    this.setState({
      todos: [...this.state.todos, todo],
      todoName: ''
    });
    // this.state.todoName = '';
  };

  render() {
    // const todoList = this.state.todos.map((todo, i) => {
    //   return <li key={i}>{todo.name}</li>;
    // });
    return (
      <>
        <input
          type="text"
          name="todoName"
          placeholder="Enter todo details.."
          value={this.state.todoName}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnSubmit}>Add</button>
        <TodoList data={this.state.todos} />{/* <ul>{todoList}</ul> */}
      </>
    );
  }
}

export default AddTodo;
