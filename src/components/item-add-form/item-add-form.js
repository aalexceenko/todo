import React from "react";
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      label: ' '
    }

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="Add new list"
                value={this.state.label} />
        <button className="btn btn-outline-secondary"
                >
                Add
        </button>
      </form>
    )
  }
}