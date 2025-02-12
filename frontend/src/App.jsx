import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
import './App.css'
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/*<Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />*/}
      </Routes>
    </Router>
  );
}

export default App
