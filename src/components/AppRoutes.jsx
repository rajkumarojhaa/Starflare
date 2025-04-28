import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';
import Brand from '../components/Brand';
import Agency from '../components/Agency';
import Creator from '../components/Creator';
import Blog from '../components/Blog';
import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import Blog4 from './Blogs/Blog4';
import Blog5 from './Blogs/Blog5';
import Blog6 from './Blogs/Blog6';
import Blog7 from './Blogs/Blog7';
import Blog8 from './Blogs/Blog8';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
        <Route path="/Blog5" element={<Blog5 />} />
        <Route path="/Blog6" element={<Blog6 />} />
        <Route path="/Blog7" element={<Blog7 />} />
        <Route path="/Blog8" element={<Blog8 />} />        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
