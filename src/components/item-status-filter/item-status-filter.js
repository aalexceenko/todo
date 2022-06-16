import React from "react";
import './item-status-filter.css';

const filterButtons = [
  {label: 'All', name: 'all'},
  {label: 'Active', name: 'active'},
  {label: 'Done', name: 'done'}
];

const ItemStatusFilter = ({ filter, onFilterChange}) => {

  const buttons = filterButtons.map(({label, name}) => {
    const isActive = name === filter;

    const classNames = 'btn' + (isActive ? ' btn-info' : ' btn-outline-secondary');

    return (
      <button type="button"
              key={name}
              className={classNames}
              onClick={() => onFilterChange(name)}>
                {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      { buttons }
    </div>
  )
}

export default ItemStatusFilter;

