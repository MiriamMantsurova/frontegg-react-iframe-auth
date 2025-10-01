import React, { useState, useEffect } from 'react';

const CallbackPage: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    // Check if we're in an iframe context
    const isInIframe = window.parent !== window;
    
    if (isInIframe) {
      // We're in the iframe, close modal and reload parent
      setStatus('success');
      setMessage('Authentication successful! Closing...');
      
      // Send close message to parent and reload
      setTimeout(() => {
        if (window.parent && window.parent !== window) {
          window.parent.location.reload();
        }
      }, 1000);
    } else {
      // We're in the main app, just reload
      setStatus('success');
      setMessage('Authentication successful! Reloading...');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        {status === 'loading' && (
          <>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #007bff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>Processing...</h2>
            <p style={{ color: '#666', margin: 0 }}>{message}</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#28a745',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '20px'
            }}>✓</div>
            <h2 style={{ color: '#28a745', marginBottom: '10px' }}>Success!</h2>
            <p style={{ color: '#666', margin: 0 }}>{message}</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#dc3545',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '20px'
            }}>✗</div>
            <h2 style={{ color: '#dc3545', marginBottom: '10px' }}>Error</h2>
            <p style={{ color: '#666', margin: 0 }}>{message}</p>
          </>
        )}
      </div>
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CallbackPage;
