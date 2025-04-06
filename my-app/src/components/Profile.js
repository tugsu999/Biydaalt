import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth(); 

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user ? (
        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Welcome, {user.email}!</strong></p>
        </div>
      ) : (
        <div className="auth-prompt">
          <p>Please log in to see your profile.</p>
          <div className="auth-buttons">
            <Link to="/login">
              <button className="auth-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="auth-button">Register</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
