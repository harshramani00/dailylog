// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css'; // or use Tailwind

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to <span className="highlight">DailyLog</span> 📝</h1>
        <p>Your personal space to reflect, log, and grow each day.</p>
        <div className="button-group">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
