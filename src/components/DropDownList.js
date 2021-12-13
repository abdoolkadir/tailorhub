import React, { useState } from 'react';

function DropDownList({ icon, header, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="drop-down-container">
      <div className="drop-down-header" onClick={toggling}>
        {header}
        <img src={icon} alt="" />
      </div>
      {isOpen && (
        <div className="drop-down-list-container">
          <ul className="drop-down-list">
            {items.map((item, index) => (
              <li className="list-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownList;
