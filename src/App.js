import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Mechanic from './Mechanic';
import Home from './Home';
import Login from './Login';


function App() {
  
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="mechanic" element={<Mechanic />} />
      </Routes>
    </div>
  );
}

export default App;
