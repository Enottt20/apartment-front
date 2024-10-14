import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <div className="menu-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item"><NavLink to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink to="/registration">Registration - Log In</NavLink></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const Home: React.FC = () => (
  <div>
    <h1>Welcome to Home Page</h1>
  </div>
);

export default App;