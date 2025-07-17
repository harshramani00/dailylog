// src/pages/Register.jsx
import { useState } from 'react';
import './Login.css'; // Reuse the same CSS

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', { name, email, password });

    const fakeJWT = 'jwt.token.here';
    localStorage.setItem('token', fakeJWT);
    alert('User registered and JWT saved (simulated)');
  };

  const handleGoogleSignup = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Create a DailyLog Account</h2>
        <form onSubmit={handleRegister} className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>

        <hr style={{ margin: '1.5rem 0' }} />

        <button className="google-btn" onClick={handleGoogleSignup}>
          ✨ Sign up with Google
        </button>
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

export default Register;
