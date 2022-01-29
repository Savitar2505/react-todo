import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleFilter}) => {
  return (
    <div className="btn-group">
      <button onClick={() => onToggleFilter('all')}
              type="button"
              className="btn btn-info">All</button>
      <button onClick={() => onToggleFilter('active')}
              type="button"
              className="btn btn-outline-secondary">Active</button>
      <button onClick={() => onToggleFilter('done')}
              type="button"
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
