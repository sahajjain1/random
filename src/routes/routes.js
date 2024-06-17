import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoutes';

const LoginPage = lazy(() => import('../components/Login'));
const DashboardPage = lazy(() => import('../components/Dashboard'));
const ProjectDetailsPage = lazy(() => import('../components/ProjectDetails'));

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<div>loading..</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
