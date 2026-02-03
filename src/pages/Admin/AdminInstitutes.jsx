import { useState, useCallback } from 'react';
import './ManageUniversities.css';

const ManageUniversities = () => {
  const [universities, setUniversities] = useState([
    {
      id: 1,
      universityName: 'Test University',
      email: 'testuni@gmail.com',
      walletAddress: '0xAbC12341f5678901234567890abcdef12345678',
      onChainIssuer: 'Not Issuer',
      status: 'Approved',
      registered: '1/16/2026',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleRevoke = useCallback((id) => {
    setLoading(true);
    // TODO: API call to revoke university status
    setTimeout(() => {
      setUniversities((prev) =>
        prev.map((uni) =>
          uni.id === id ? { ...uni, status: 'Revoked' } : uni
        )
      );
      setLoading(false);
    }, 500);
  }, []);

  const handleRestoreIssuer = useCallback((id) => {
    setLoading(true);
    // TODO: API call to restore issuer status
    setTimeout(() => {
      setUniversities((prev) =>
        prev.map((uni) =>
          uni.id === id ? { ...uni, onChainIssuer: 'Active Issuer' } : uni
        )
      );
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="manage-universities-container">
      {/* Header */}
      <div className="universities-header">
        <div className="header-content">
          <h1>🏛️ Manage Universities</h1>
          <p>View all registered universities and manage their issuer status</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="universities-table-section">
        {universities.length > 0 ? (
          <div className="table-wrapper">
            <table className="universities-table">
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Email</th>
                  <th>Wallet Address</th>
                  <th>On-chain Issuer</th>
                  <th>Status</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {universities.map((university) => (
                  <tr key={university.id}>
                    <td className="university-name">{university.universityName}</td>
                    <td className="email">{university.email}</td>
                    <td className="wallet-address">
                      <span className="wallet-text">{university.walletAddress}</span>
                    </td>
                    <td className="issuer-status">{university.onChainIssuer}</td>
                    <td className="status-cell">
                      <span className={`status-badge status-${university.status.toLowerCase()}`}>
                        {university.status}
                      </span>
                    </td>
                    <td className="registered-date">{university.registered}</td>
                    <td className="actions-cell">
                      <div className="actions-buttons">
                        {university.status === 'Approved' && (
                          <button
                            className="action-btn revoke-btn"
                            onClick={() => handleRevoke(university.id)}
                            disabled={loading}
                          >
                            ⊘ Revoke
                          </button>
                        )}
                        {university.status === 'Revoked' && (
                          <button
                            className="action-btn restore-btn"
                            onClick={() => handleRestoreIssuer(university.id)}
                            disabled={loading}
                          >
                            ↻ Restore
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-icon">🏛️</p>
            <h3>No Universities Found</h3>
            <p>No registered universities yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUniversities;
