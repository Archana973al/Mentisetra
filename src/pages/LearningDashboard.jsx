const LearningDashboard = ({ userType }) => {
  // Sample data for mentoring sessions
  const mentoringSessions = [
    {
      id: 1,
      errorType: "React State Management",
      description: "Cannot update state properly in functional components",
      mentor: "Alex Johnson",
      status: "completed",
      date: "2023-05-15",
      duration: "45 mins"
    },
    {
      id: 2,
      errorType: "API Integration",
      description: "CORS issues when fetching from backend",
      mentor: "Sarah Williams",
      status: "scheduled",
      date: "2023-05-20",
      duration: "60 mins"
    },
    {
      id: 3,
      errorType: "CSS Layout",
      description: "Flexbox alignment problems in responsive design",
      mentor: "Michael Chen",
      status: "in-progress",
      date: "2023-05-18",
      // duration: "30 mins"
    },
    {
      id: 4,
      errorType: "Authentication",
      description: "JWT token not being stored correctly",
      mentor: "Priya Patel",
      status: "scheduled",
      date: "2023-05-22",
      // duration: "45 mins"
    }
  ];

  // Count sessions by status
  const stats = {
    completed: mentoringSessions.filter(s => s.status === "completed").length,
    scheduled: mentoringSessions.filter(s => s.status === "scheduled").length,
    inProgress: mentoringSessions.filter(s => s.status === "in-progress").length,
    total: mentoringSessions.length
  };

  return (
    <main className="dashboard-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">
            {userType === 'mentor' ? 'My Mentoring Dashboard' : 'My Error Resolution Dashboard'}
          </h1>
          
          <div className="dashboard-grid">
            {/* Stats Card */}
            <div className="stats-card">
              <h3>Session Statistics</h3>
              <div className="stat">
                <span className="stat-value">{stats.completed}</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="stat">
                <span className="stat-value">{stats.scheduled}</span>
                <span className="stat-label">Scheduled</span>
              </div>
              <div className="stat">
                <span className="stat-value">{stats.inProgress}</span>
                <span className="stat-label">In Progress</span>
              </div>
              <div className="stat">
                <span className="stat-value">{stats.total}</span>
                <span className="stat-label">Total Sessions</span>
              </div>
            </div>

            {/* Sessions List */}
            <div className="sessions-list">
              <h3>My Error Resolution Sessions</h3>
              <div className="session-filters">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Completed</button>
                <button className="filter-btn">Scheduled</button>
                <button className="filter-btn">In Progress</button>
              </div>
              
              {mentoringSessions.map(session => (
                <div key={session.id} className={`session-card ${session.status}`}>
                  <div className="session-header">
                    <h4>{session.errorType}</h4>
                    <span className={`session-status ${session.status}`}>
                      {session.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="session-description">{session.description}</p>
                  <div className="session-details">
                    <span className="mentor-name">Mentor: {session.mentor}</span>
                    <span className="session-date">{session.date} ({session.duration})</span>
                  </div>
                  <div className="session-actions">
                    {session.status === 'scheduled' && (
                      <button className="btn btn-outline">Reschedule</button>
                    )}
                    {session.status === 'in-progress' && (
                      <button className="btn btn-primary">Join Session</button>
                    )}
                    {session.status === 'completed' && (
                      <button className="btn btn-outline">View Notes</button>
                    )}
                    <button className="btn btn-text">Details</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="recommendations">
              <h3>Recommended Mentors</h3>
              <div className="recommendation-card">
                <h4>Emma Davis</h4>
                <p>Senior React Developer | 5+ years experience</p>
                <div className="expertise">
                  <span>React</span>
                  <span>Redux</span>
                  <span>TypeScript</span>
                </div>
                <button className="btn btn-primary">Request Session</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningDashboard;