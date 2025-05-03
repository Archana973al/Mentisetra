import homeImage from '../assets/home.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Learning Experience</h1>
          <p className="hero-subtitle">
            Mentisera provides cutting-edge educational tools to help you achieve your learning goals faster and more effectively.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary mr-2">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={homeImage} alt="Learning illustration" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;