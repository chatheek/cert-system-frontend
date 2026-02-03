import { useState, useCallback } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, activeNav, onNavClick }) => {
  const handleNavClick = useCallback((navItem) => {
    if (onNavClick) {
      onNavClick(navItem);
    }
  }, [onNavClick]);

  const handleLogout = useCallback(() => {
    // TODO: Handle logout logic
    console.log('Logging out...');
  }, []);

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div className="sidebar-backdrop" onClick={onClose} />
      )}

      {/* Mini Sidebar (Collapsed) */}
      <aside className="admin-sidebar-mini">
        {/* Mini Logo */}
        <div className="mini-sidebar-logo">
          <span className="lock-icon">🔒</span>
        </div>

        {/* Mini Navigation Menu */}
        <nav className="mini-sidebar-nav">
          <ul className="mini-nav-list">
            <li>
              <button
                className={`mini-nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleNavClick('dashboard')}
                title="Dashboard"
              >
                <span className="nav-icon">📊</span>
              </button>
            </li>
            <li>
              <button
                className={`mini-nav-item ${activeNav === 'pending' ? 'active' : ''}`}
                onClick={() => handleNavClick('pending')}
                title="Pending"
              >
                <span className="nav-icon">⏳</span>
              </button>
            </li>
            <li>
              <button
                className={`mini-nav-item ${activeNav === 'universities' ? 'active' : ''}`}
                onClick={() => handleNavClick('universities')}
                title="Universities"
              >
                <span className="nav-icon">🏛️</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mini Footer */}
        <div className="mini-sidebar-footer">
          <button
            className="mini-logout-btn"
            onClick={handleLogout}
            title="Log Out"
          >
            🚪
          </button>
        </div>
      </aside>

      {/* Full Sidebar */}
      <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="lock-icon">🔒</span>
            <h2>Admin</h2>
          </div>
          <button className="close-sidebar-btn" onClick={onClose} aria-label="Close sidebar">
            ✕
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            <li className="sidebar-nav-item">
              <button
                className={`sidebar-nav-link ${activeNav === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleNavClick('dashboard')}
              >
                <span className="nav-link-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </button>
            </li>
            <li className="sidebar-nav-item">
              <button
                className={`sidebar-nav-link ${activeNav === 'pending' ? 'active' : ''}`}
                onClick={() => handleNavClick('pending')}
              >
                <span className="nav-link-icon">⏳</span>
                <span className="nav-text">Pending</span>
              </button>
            </li>
            <li className="sidebar-nav-item">
              <button
                className={`sidebar-nav-link ${activeNav === 'universities' ? 'active' : ''}`}
                onClick={() => handleNavClick('universities')}
              >
                <span className="nav-link-icon">🏛️</span>
                <span className="nav-text">Universities</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button
            className="sidebar-logout-btn"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
