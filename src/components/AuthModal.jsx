import { useState } from 'react';

const AuthModal = ({ type, onClose, onSwitch }) => {
  const [userType, setUserType] = useState(null); // 'mentor' or 'learner'
  const [showUserTypeSelection, setShowUserTypeSelection] = useState(true);

  const handleUserTypeSelect = (selectedType) => {
    setUserType(selectedType);
    setShowUserTypeSelection(false);
  };

  const handleBackToSelection = () => {
    setShowUserTypeSelection(true);
    setUserType(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        
        {showUserTypeSelection ? (
          <>
            <div className="modal-header">
              <h2>Continue as</h2>
            </div>

            <div className="user-type-selection">
              <button 
                className="user-type-btn mentor-btn"
                onClick={() => handleUserTypeSelect('mentor')}
              >
                <div className="icon">👨‍🏫</div>
                <h3>Mentor</h3>
                <p>Share your knowledge and guide learners</p>
              </button>

              <button 
                className="user-type-btn learner-btn"
                onClick={() => handleUserTypeSelect('learner')}
              >
                <div className="icon">🎓</div>
                <h3>Learner</h3>
                <p>Expand your skills with expert guidance</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="modal-header">
              <button 
                className="back-btn"
                onClick={handleBackToSelection}
              >
                ← Back
              </button>
              <h2>
                {type === 'login' ? 'Login' : 'Sign Up'} as {userType}
              </h2>
            </div>

            <form className="auth-form">
              {type === 'signup' && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
              )}
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>

              {type === 'signup' && (
                <div className="form-group">
                  <label>
                    {userType === 'mentor' 
                      ? "Your Expertise" 
                      : "Interests"}
                  </label>
                  <input 
                    type="text" 
                    placeholder={
                      userType === 'mentor' 
                        ? "E.g. Web Development, Data Science" 
                        : "E.g. Python, Graphic Design"
                    } 
                  />
                </div>
              )}
              
              <button type="submit" className="btn btn-primary">
                {type === 'login' ? 'Login' : `Create ${userType} Account`}
              </button>
            </form>

            <div className="auth-switch">
              {type === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button 
                type="button"
                className="text-button" 
                onClick={onSwitch}
              >
                {type === 'login' ? 'Sign up' : 'Login'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;