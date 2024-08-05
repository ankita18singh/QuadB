import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../../assets/img/agata-create-BsQxAIl2LdA-unsplash.jpg'; // Adjust path as needed

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      window.dispatchEvent(new Event('userLogin'));
      
      if (user.role === 'Seller') {
        navigate('/seller-dashboard');
      } else if (user.role === 'Buyer') {
        navigate('/');
      } else {
        console.error('Unknown user role:', user.role);
      }
    } catch (err) {
      console.error('Login failed:', err);
      // Handle login failure (e.g., show error message to user)
    }
  };

  return (
    <div className="page-container">
      <div className="image-section">
        <img src={logo} alt="Background" className="background-image" />
      </div>
      <div className="login-container">
        <h2 className="login-title">Welcome Back! Please Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <FaUser className="input-icon" />
            <input 
              className="login-form-input"
              type="email" 
              name="email" 
              placeholder="Your username or email address"
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="login-form-group">
            <FaLock className="input-icon" />
            <input 
              className="login-form-input"
              type="password" 
              name="password" 
              placeholder="Password"
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <button className="submit-button" type="submit">Login</button>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
