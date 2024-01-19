import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
// import Signup from '../src/Components/LoginSignup/Signup';
// import {Login} from './Components/LoginSignup/Login';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
