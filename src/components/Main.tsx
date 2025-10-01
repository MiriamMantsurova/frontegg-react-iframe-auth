import { useAuth , useAuthActions } from "@frontegg/react";
import { useState } from "react";
import AccountInfo from "./AccountInfo";
import Header from "./Header";
import SignupBanner from "./SignupBanner";
import FronteggLoginIframe from "./FronteggLoginIframe";

const Main = () => {
  const { isAuthenticated} = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { logout } = useAuthActions();



  // Show login modal
  const handleShowLogin = () => {
    setShowLoginModal(true);
  };

  
  const handleLogout = () => {
    logout();
  };


  return (
    <div className="app">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      {isAuthenticated ? (
        <AccountInfo />
      ) : (
        <main className="section-screen">
          <div className="section-card">
            <h1 className="title">Welcome</h1>
            <p>Please sign in to continue</p>
            <button 
              className="primary-button" 
              onClick={handleShowLogin}
              style={{ marginTop: '20px', padding: '12px 24px' }}
            >
              Sign In
            </button>
          </div>
        </main>
      )}
      
      {/* Login Modal */}
      <FronteggLoginIframe 
        isOpen={showLoginModal}
        onClose={() => {
          console.log('Modal close called');
          setShowLoginModal(false);
        }}
      />
      <SignupBanner />
    </div>
  );
};

export default Main;
