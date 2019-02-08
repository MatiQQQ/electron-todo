import React, { Component } from "react";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newTodo = {
      title: this.state.todo,
      id: uuid()
    };
    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
  };

  onDeleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: [...newTodos] });
  };

  renderTodos = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <React.Fragment key={todo.id}>
          <tr>
            <td>{index + 1}</td>
            <td>{todo.title}</td>
            <td>
              <button
                onClick={() => this.onDeleteTodo(todo.id)}
                className={`uk-button uk-button-default`}
              >
                Delete
              </button>
            </td>
          </tr>
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <div className="uk-container">
        <h1>TODO List</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="uk-margin">
              <input
                className="uk-input uk-width-1-2"
                name="todo"
                value={this.state.todo}
                onChange={this.onChange}
              />
              <input
                className="uk-button uk-button-default"
                type="submit"
                value="Submit"
                disabled={this.state.todo === "" ? true : false}
              />
            </div>
          </form>
        </div>
        <table className="uk-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Title</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTodos()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
