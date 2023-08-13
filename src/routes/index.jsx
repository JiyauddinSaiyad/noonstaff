import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Footer } from '../container';
import MainApp from '../HomeRoutes';
import NotFoundPage from '../container/404/404';

const MainRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/home" element={<MainApp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default MainRoutes;
