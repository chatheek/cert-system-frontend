import { useState, useCallback } from 'react';
import './PendingApprovals.css';

const PendingApprovals = () => {
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      universityName: 'Test University',
      email: 'testuni@gmail.com',
      walletAddress: '0xAbC12341f5678901234567890abcdef12345678',
      logo: '📋',
      verificationDoc: 'document.pdf',
      registered: '1/16/2026',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleApprove = useCallback((id) => {
    setLoading(true);
    // TODO: API call to approve
    setTimeout(() => {
      setApprovals((prev) => prev.filter((item) => item.id !== id));
      setLoading(false);
    }, 500);
  }, []);

  const handleReject = useCallback((id) => {
    setLoading(true);
    // TODO: API call to reject
    setTimeout(() => {
      setApprovals((prev) => prev.filter((item) => item.id !== id));
      setLoading(false);
    }, 500);
  }, []);

  const handleViewDoc = useCallback((docPath) => {
    // TODO: Open document in modal or new tab
    console.log('Viewing document:', docPath);
  }, []);

  return (
    <div className="pending-approvals-container">
      {/* Header */}
      <div className="pending-header">
        <div className="header-content">
          <h1>⏳ Pending Approvals</h1>
          <p>Review and approve or reject university registration requests</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="pending-table-section">
        {approvals.length > 0 ? (
          <div className="table-wrapper">
            <table className="pending-table">
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Email</th>
                  <th>Wallet Address</th>
                  <th>Logo</th>
                  <th>Verification Doc</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((approval) => (
                  <tr key={approval.id}>
                    <td className="university-name">{approval.universityName}</td>
                    <td className="email">{approval.email}</td>
                    <td className="wallet-address">
                      <span className="wallet-text">{approval.walletAddress}</span>
                    </td>
                    <td className="logo-cell">
                      <div className="logo-preview">{approval.logo}</div>
                    </td>
                    <td className="doc-cell">
                      <button
                        className="view-doc-link"
                        onClick={() => handleViewDoc(approval.verificationDoc)}
                      >
                        View Doc
                      </button>
                    </td>
                    <td className="registered-date">{approval.registered}</td>
                    <td className="actions-cell">
                      <div className="actions-buttons">
                        <button
                          className="action-btn approve-btn"
                          onClick={() => handleApprove(approval.id)}
                          disabled={loading}
                        >
                          ✓ Approve
                        </button>
                        <button
                          className="action-btn reject-btn"
                          onClick={() => handleReject(approval.id)}
                          disabled={loading}
                        >
                          ✕ Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-icon">✓</p>
            <h3>No Pending Approvals</h3>
            <p>All university registrations have been processed!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingApprovals;
