// src/components/LeftSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-900 text-white w-48 p-4 flex flex-col pt-16 items-center">
      <ul className="text-center">
        <li className="mb-6">
          <Link to="/contacts" className="text-gray-300 hover:text-white">Contacts</Link>
        </li>
        <li className="mb-6">
          <Link to="/charts-and-maps" className="text-gray-300 hover:text-white">Charts and Maps</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
