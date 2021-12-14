import React from 'react';
import DropDownList from './DropDownList';
import { dropDownData } from '../data/dropDownData';

function SearchResulBar() {
  return (
    <div className="search-result-bar">
      <div className="container">
        <div className="search-result-heading">
          <p>Your search results for</p>
          <h2>"Kaftan"</h2>
        </div>

        <div className="filters">
          <div className="drop-down">
            {dropDownData.map(({ icon, listItem, header }, index) => (
              <DropDownList
                icon={icon}
                header={header}
                key={index}
                items={listItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResulBar;
