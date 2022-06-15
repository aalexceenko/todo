import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {

  constructor() {
    super();

    this.state = {
      isDone: false,
      isImportant: false
    }

    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportantClick = this.onMarkImportantClick.bind(this);
  }

  onLabelClick() {
    console.log(this.props.label);
    this.setState((state) => {
      return {
        isDone: !state.isDone
      }
    })
  }

  onMarkImportantClick() {
    this.setState((state) => {
      return {
        isImportant: !state.isImportant
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props;
    const { isDone, isImportant } = this.state;

    let classNames = "todo-list-item";
    if (isDone) {
      classNames += ' done';
    }

    if (isImportant) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportantClick}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
