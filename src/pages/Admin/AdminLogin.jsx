import { useState, useCallback } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  }, [error]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
      }

      const data = await response.json();
      // Handle successful login - store token, redirect, etc.
      console.log('Login successful:', data);
      // TODO: Store token in localStorage/sessionStorage
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [formData, error]);

  const handleBackToHome = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        {/* Header Section */}
        <div className="admin-login-header">
          <div className="lock-icon">🔒</div>
          <h1>Admin Log In</h1>
          <p className="subtitle">Certi chain System Administration</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="admin-login-form">
          {/* Username Field */}
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
              disabled={loading}
              className="form-input"
              autoComplete="username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
              className="form-input"
              autoComplete="current-password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        {/* Footer Section */}
        <div className="admin-login-footer">
          <button
            onClick={handleBackToHome}
            className="back-to-home-link"
            type="button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
