import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <div className="container">
    <div className="column column-1">
      <h1>GUITAR</h1>
    </div>
    <div className="column column-2">
      <h1>REACT</h1>
    </div>
    <div className="column column-3">
      <h1>UNITY</h1>
    </div>
    <div className="column column-4">
        {/* Add content for column 4 here */}
      </div>
  </div>
  );
}

export default Counter;