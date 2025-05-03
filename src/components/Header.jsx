import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/mentisera.png';
import AuthModal from './AuthModal';
import LearningDashboard from '../pages/LearningDashboard';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAuthClick = (type) => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const handleDashboardToggle = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo-container">
              <div className="logo-circle">
                <img src={Logo} alt="Mentisera Logo" className="logo-img" />
              </div>
              <Link to="/" className="logo-text">Mentisera</Link>
            </div>

            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search mentors or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </form>
            
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/stream" className="nav-link">Stream</Link></li>
              <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
              <li>
                <Link 
                  to="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDashboardToggle();
                  }}
                  className="nav-link"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            
            <div className="auth-buttons">
              <button 
                className="login-btn" 
                onClick={() => handleAuthClick('login')}
              >
                Login
              </button>
              <button 
                className="signup-btn" 
                onClick={() => handleAuthClick('signup')}
              >
                Sign Up
              </button>
            </div>
          </nav>

          {isAuthModalOpen && (
            <AuthModal 
              type={authType}
              onClose={() => setIsAuthModalOpen(false)}
              onSwitch={() => setAuthType(authType === 'login' ? 'signup' : 'login')}
              onUserTypeSelect={(type) => setUserType(type)}
            />
          )}
        </div>
      </header>

      {isDashboardOpen && (
        <LearningDashboard 
          onClose={() => setIsDashboardOpen(false)}
          userType={userType}
        />
      )}
    </>
  );
};

export default Header;