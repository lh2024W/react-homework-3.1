import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    // state хранит данные, которые могут изменяться
    this.state = {
      // текущий текст, который вводит пользователь
      newTodo: "",

      // список всех задач
      todos: []
    };
  }

  // Метод вызывается при вводе текста в input
  handleInputChange = (event) => {
    this.setState({
      
      newTodo: event.target.value // event.target.value — то, что пользователь ввёл
    });
  };

  // Метод добавления новой задачи
  addTodo = () => {
    // Проверяем, чтобы пустая строка не добавлялась
    if (this.state.newTodo.trim() === "") {
      return;
    }

    this.setState({
      // добавляем новую задачу в конец массива todos
      todos: [...this.state.todos, this.state.newTodo],

      // очищаем поле ввода после добавления
      newTodo: ""
    });
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          border: "2px solid #ccc",
          borderRadius: "10px"
        }}
      >
        {/* Заголовок приходит через props */}
        <h2>{this.props.title}</h2>

        {/* Поле ввода новой задачи */}
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          placeholder="Введите задачу"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        {/* Кнопка добавления */}
        <button
          onClick={this.addTodo}
          style={{ width: "100%", padding: "10px", cursor: "pointer" }}
        >
          Добавить
        </button>

        {/* Список задач */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
