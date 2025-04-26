
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
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/blog/blog4" element={<Blog4 />} />
        <Route path="/blog/blog5" element={<Blog5 />} />
        <Route path="/blog/blog6" element={<Blog6 />} />
        <Route path="/blog/blog7" element={<Blog7 />} />
        <Route path="/blog/blog8" element={<Blog8 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
