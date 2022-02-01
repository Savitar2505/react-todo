import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onToggleFilter, filter}) => {
  return (
    <div className="btn-group">
      <button onClick={() => onToggleFilter('all')}
              style={filter==='all' ? {
                  backgroundColor: '#17a2b8',
                  color:'#fff',
                  borderColor: '#17a2b8',
                  boxShadow: '0 0 0 0.2rem rgb(23 162 184 / 50%)'
              } : {
                  backgroundColor: 'transparent',
                  color:'#6c757d',
                  borderColor: '#6c757d'
              }}
              type="button"
              className="btn btn-info">All</button>
      <button onClick={() => onToggleFilter('active')}
              style={filter==='active' ? {
                  backgroundColor: '#17a2b8',
                  color:'#fff',
                  borderColor: '#17a2b8',
                  boxShadow: '0 0 0 0.2rem rgb(23 162 184 / 50%)'

              } : {
                  backgroundColor: 'transparent',
                  color:'#6c757d',
                  borderColor: '#6c757d'
              }}
              type="button"
              className="btn btn-outline-secondary">Active</button>
      <button onClick={() => onToggleFilter('done')}
              style={filter==='done' ? {
                  backgroundColor: '#17a2b8',
                  color:'#fff',
                  borderColor: '#17a2b8',
                  boxShadow: '0 0 0 0.2rem rgb(23 162 184 / 50%)'
              } : {
                  backgroundColor: 'transparent',
                  color:'#6c757d',
                  borderColor: '#6c757d'
              }}
              type="button"
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
