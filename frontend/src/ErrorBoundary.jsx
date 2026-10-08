import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          color: '#f1f1f7',
          fontFamily: "'Inter', system-ui, sans-serif",
          padding: '24px'
        }}>
          <div style={{
            maxWidth: '520px',
            width: '100%',
            background: 'rgba(20, 20, 30, 0.85)',
            border: '1px solid rgba(108, 92, 231, 0.3)',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '28px'
            }}>
              💻
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px' }}>
              Ganesh Badar &mdash; Portfolio
            </h2>
            <p style={{ color: '#a0a0b4', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.5' }}>
              An unexpected display issue occurred while initializing the portfolio interface.
            </p>
            {this.state.error?.message && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                color: '#fca5a5',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                marginBottom: '20px',
                textAlign: 'left',
                overflowX: 'auto'
              }}>
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={this.handleReload}
              style={{
                background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
                border: 'none',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.85rem',
                boxShadow: '0 4px 15px rgba(108, 92, 231, 0.4)'
              }}
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
