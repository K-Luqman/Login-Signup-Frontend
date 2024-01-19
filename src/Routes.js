
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;