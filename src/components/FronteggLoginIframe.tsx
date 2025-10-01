import React, { useState, useEffect } from 'react';
import { useAuth } from '@frontegg/react';

interface FronteggLoginIframeProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess?: (authData: any) => void;
  width?: string;
  height?: string;
}

const FronteggLoginIframe: React.FC<FronteggLoginIframeProps> = ({
  isOpen,
  onClose,
  width = "100%",
  height = "700px"
}) => {
  const [isLoading, setIsLoading] = useState(true);



  // Construct the Frontegg login URL using your configuration
  const callbackUrl = `${window.location.origin}/callback`;
  const fronteggLoginUrl = `http://localhost:3001/account/login?redirectUrl=${encodeURIComponent(callbackUrl)}`;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Close button clicked');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="frontegg-login-iframe-overlay" onClick={handleOverlayClick}>
      <div className="frontegg-login-iframe-container">
        <div className="frontegg-login-iframe-header">
          <h3>Sign In</h3>
          <button 
            className="frontegg-login-iframe-close" 
            onClick={handleCloseClick}
            aria-label="Close"
            style={{ 
              zIndex: 10000,
              position: 'relative',
              pointerEvents: 'auto'
            }}
          >
            ×
          </button>
        </div>
        <div className="frontegg-login-iframe-content">
          {isLoading && (
            <div className="frontegg-login-iframe-loading">
              <div className="spinner"></div>
              <p>Loading login form...</p>
            </div>
          )}
          <iframe
            src={fronteggLoginUrl}
            width={width}
            height={height}
            frameBorder="0"
            title="Frontegg Login"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
            onLoad={handleIframeLoad}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FronteggLoginIframe;
