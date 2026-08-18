import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';

const DashboardPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav>
        <Navbar />
      </nav>
      <div className='flex flex-1'>
        <Sidebar />
      </div>
    </div>
  )
}

export default DashboardPage