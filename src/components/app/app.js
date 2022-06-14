import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';


const App = () => {

  const todoData = [
    {id: 1, label: "drink", important: false},
    {id: 2, label: "not drink", important: true},
    {id: 3, label: "drink tea", important: false},
  ] 
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;