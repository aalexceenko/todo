import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoData: [
        {id: 1, label: "drink", important: false},
        {id: 2, label: "not drink", important: true},
        {id: 3, label: "drink tea", important: false}
      ]
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    console.log('deleted', id);

    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);

      const newArray = state.todoData.slice();
      newArray.splice(idx, 1);

      return {
        todoData: newArray
      }

    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todoData={this.state.todoData}
          onDeleted={this.deleteItem } />
      </div>
    );
  }

};

