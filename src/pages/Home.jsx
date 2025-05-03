import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Active Mentors</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Problems Solved</p>
            </div>
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Active Learners</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Mentor Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Our Mentoring Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Describe Your Problem</h3>
              <p>Share your code error or challenge with our system</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Matched</h3>
              <p>We'll connect you with the perfect mentor for your issue</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Solve Together</h3>
              <p>Work through the solution in a live coding session</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Solve Your Coding Problems?</h2>
          <p className="section-subtitle">
            Join thousands of developers who get unstuck with our expert mentors
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Get Help Now</button>
            <button className="btn btn-outline btn-large">How It Works</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;