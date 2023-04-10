import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../containers/home';
import Statistics from '../containers/statistics';
import Plans from '../containers/plans';
import Notes from '../containers/notes';
import SignIn from '../containers/auth/signin';
import Goal from '../containers/goal';

interface ComponentProps {
  isAuthenticated: boolean;
}
const PrivateRoutes = ({ isAuthenticated }: ComponentProps) => {
  return isAuthenticated ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/goal" element={<Goal />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/note" element={<Notes />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/auth" element={<SignIn />} />
    </Routes>
  );
};
export default PrivateRoutes;
