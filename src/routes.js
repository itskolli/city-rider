import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home';

export const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
)