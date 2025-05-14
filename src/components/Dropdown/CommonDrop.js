'use client';

import { useState, useEffect } from 'react';

export default function CommonDrop({ options = [], comments}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredComments, setFilteredComments] = useState([]);
 


  // Sorting functions
  const sortComments = (selectedOption) => {
    let sortedComments;
    switch (selectedOption) {
      case 'Newest':
        sortedComments = [...comments].sort((a, b) => b.Date.getTime() - a.Date.getTime());
        break;
      case 'Oldest':
        sortedComments = [...comments].sort((a, b) => a.Date.getTime() - b.Date.getTime()); 
        break;
      // case 'Top':
      //   sortedComments = [...comments].sort((a, b) => b.likes - a.likes); // Sort by likes (top comments first)
      //   break;
      default:
        sortedComments = [...comments];
    }
    setFilteredComments(sortedComments);
  };

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0].value); // Set first option as default
    }
  }, [options]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Just update state
  };

  if (options.length === 0) {
    return <p className="selected-text"></p>;
  }

  return (
    <div className="dropdown-wrapper">
      <select
        id="mySelect"
        value={selectedOption}
        onChange={handleChange}
        className="custom-select"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="dropdown-arrow">
        <img src="/images/drop-arrow.svg" alt="drop-arrow" />
      </div>

      {/* <p className="selected-text">Selected: {selectedOption}</p> */}
    </div>
  );
}
