import React from "react";
import "./search-panel.css"

export default class SearchPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }
 
  onSearchChange(e) {
    const term = e.target.value;
    this.setState({
      term
    })

    this.props.onSearchChange(e.target.value)
  }

  render() {
    return (
      <input type="text"
             className="form-control search-input"
              placeholder="type to search"
              value={this.state.term}
              onChange={this.onSearchChange} />
    );
  }

};
