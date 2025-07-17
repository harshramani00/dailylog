import { useState } from 'react';
import './Login.css'; // New CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const fakeJWT = 'abc.def.ghi';
    localStorage.setItem('token', fakeJWT);
    alert('JWT saved (simulated)');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Login to DailyLog</h2>
        <form onSubmit={handleLogin} className="form">
          <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <p>Don't have an account? <a href="/register">Register</a></p>
          <button type="submit">Login</button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleLogin}>🔐 Login with Google</button>
      </div>

      <div className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/diary-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Login;
