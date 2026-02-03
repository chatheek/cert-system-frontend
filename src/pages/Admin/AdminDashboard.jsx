import { useState, useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import PendingApprovals from './PendingApprovals';
import ManageUniversities from './ManageUniversities';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleNavigation = useCallback((page) => {
    setActivePage(page);
    setSidebarOpen(false);
  }, []);

  return (
    <div className="admin-dashboard-layout">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={handleCloseSidebar}
        activeNav={activePage}
        onNavClick={handleNavigation}
      />

      {/* Main Content */}
      <div className={`dashboard-wrapper ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Toggle Button */}
        <button
          className="sidebar-toggle-btn"
          onClick={handleToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ←
        </button>

        {/* Page Content */}
        {activePage === 'dashboard' && (
          <div className="dashboard-container">
            {/* Header Section */}
            <div className="dashboard-header">
              <div className="header-content">
                <h1>Admin Dashboard</h1>
                <p>Manage Universities, approve registrations, and monitor system statistics</p>
              </div>
              <button
                className="logout-button"
                onClick={() => {
                  console.log('Logout clicked');
                }}
              >
                Log Out
              </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
              <StatCard label="Total Students" value="8" color="primary" />
              <StatCard label="Total Universities" value="6" color="primary" />
              <StatCard label="Pending Approval" value="1" color="warning" />
              <StatCard label="Approved" value="5" color="purple" />
              <StatCard label="Total Certificates" value="41" color="purple" />
            </div>

            {/* Quick Actions Section */}
            <div className="quick-actions-section">
              <h2>Quick Actions</h2>
              <div className="actions-grid">
                <button
                  className="action-button action-primary"
                  onClick={() => handleNavigation('pending')}
                >
                  <span className="action-icon">⏳</span>
                  Review Pending Approvals
                </button>
                <button
                  className="action-button action-secondary"
                  onClick={() => handleNavigation('universities')}
                >
                  <span className="action-icon">🏛️</span>
                  Manage Universities
                </button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'pending' && <PendingApprovals />}

        {activePage === 'universities' && <ManageUniversities />}
      </div>
    </div>
  );
};

export default AdminDashboard;
