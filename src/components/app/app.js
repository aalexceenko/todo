import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';


export default class App extends React.Component {
  maxId = 10;

  constructor() {
    super();

    this.state = {
      todoData: [
        {id: 1, label: "drink", isImportant: false, isDone: true},
        {id: 2, label: "not drink", isImportant: true, isDone: false},
        {id: 3, label: "drink tea", isImportant: false, isDone: false}
      ],
      term: '',
      filter: 'active'
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.searchElement = this.searchElement.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.filterElements = this.filterElements.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  deleteItem(id) {

    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);

      const newArray = state.todoData.slice();
      newArray.splice(idx, 1);

      return {
        todoData: newArray
      }

    })
  }

  addItem(text) {

    const newItem = {
      label: text,
      isImportant: false,
      isDone: false,
      id: this.maxId++
    }

    this.setState((state) => {
      const newArray = state.todoData.slice();
      newArray.push(newItem);

      return {
        todoData: newArray
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}; 

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant(id) {

    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'isImportant')
      }
    })
  }

  onToggleDone(id) {

    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'isDone')
      }
    })

  }

  searchElement(arr, str) {
    if (str.length === 0) {
      return arr;
    }

    return arr.filter((item) => {
      return item.label.toLowerCase().indexOf(str.toLowerCase()) > -1
    })
  }

  filterElements(arr, filter) {

    switch(filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((item) => !item.isDone)
      case 'done':
        return arr.filter((item) => item.isDone)
      default:
        return  arr;
    }
    
  }

  onSearchChange(term) {
    this.setState({
      term
    })
  }

  onFilterChange(filter) {
    this.setState({
      filter
    })
  }

  render() {

    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterElements(this.searchElement(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.isDone).length;
    const todoCount = todoData.filter((el) => !el.isDone).length;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter 
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
        <TodoList 
          todoData={visibleItems}
          onDeleted={this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm 
          onAdded={this.addItem}/>
      </div>
    );
  }

};

