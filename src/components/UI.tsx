import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';

const UI = () => {
    return (
        <div className="flex h-screen">
          <LeftSidebar />
          <div className="flex-1 ml-48 p-4">
            <Outlet />
          </div>
        </div>
    );
};

export default UI;
