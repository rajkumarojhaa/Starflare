
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';
import Brand from '../components/Brand';
import Agency from '../components/Agency';
import Creator from '../components/Creator';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/creator" element={<Creator />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
