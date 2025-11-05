import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeOne from '../page/home/HomeOne';
import NewHomeOne from '../page/home/NewHomeOne';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* ...other routes */}
        <Route path="/" element={<HomeOne />} />
        
      </Routes>
    </Router>
  );
}

export default AppRouter;