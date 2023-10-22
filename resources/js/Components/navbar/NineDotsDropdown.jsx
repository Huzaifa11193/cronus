
import React, { useState } from 'react';
// import './navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function NineDotsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="w-9 h-9 rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-100" onClick={toggleDropdown}>
      <img src="./dots_nine_icon.png" alt="My Image" />
      </div>
      {isOpen && (
        <div className="dropdown-content absolute top-10 right-0 bg-white border border-gray-300 rounded shadow-lg w-48 p-2 z-10">
          {/* Dropdown content */}
        </div>
      )}
    </div>
  );
}

export default NineDotsDropdown;
