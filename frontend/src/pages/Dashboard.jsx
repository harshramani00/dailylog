import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [date, setDate] = useState('');
  const [log, setLog] = useState('');
  const [logs, setLogs] = useState([
    { date: '2025-07-16', text: 'Went to the beach today. 🌊' },
    { date: '2025-07-15', text: 'Studied Node.js and React. 💻' }
  ]);
  const [showMenu, setShowMenu] = useState(false); // toggle menu

  const handleSave = () => {
    if (!date || !log) return alert('Fill in both fields');
    setLogs([{ date, text: log }, ...logs]);
    setDate('');
    setLog('');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <span>Harsh Anilkumar Ramani</span>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
          {showMenu && (
            <div className="dropdown-menu">
              <button onClick={() => alert('Profile clicked')}>👤 Profile</button>
              <button onClick={() => alert('Signing out...')}>🔓 Sign Out</button>
            </div>
          )}
        </div>
      </div>

      <div className="dashboard-content">
        <div className="log-form">
          <h2>Daily Log</h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            placeholder="Write about your day..."
            value={log}
            onChange={(e) => setLog(e.target.value)}
          />
          <button onClick={handleSave}>Save Entry</button>
        </div>

        <div className="log-history">
          {logs.map((entry, index) => (
            <div className="log-card" key={index}>
              <h4>{entry.date}</h4>
              <p>{entry.text}</p>
              <button className="view-btn">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
