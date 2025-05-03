import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🔍',
    title: 'Instant Error Diagnosis',
    description: 'Get real-time analysis of your coding problems from experienced mentors.',
    color: '#e0f7fa' // Light blue
  },
  {
    icon: '👨‍💻',
    title: '1:1 Live Sessions',
    description: 'Personalized screen-sharing sessions to debug your code together.',
    color: '#e0f7fa' // Light purple
  },
  {
    icon: '⏱️',
    title: 'Quick Response',
    description: 'Average response time under 30 minutes when you\'re stuck.',
    color: '#e0f7fa' // Light green
  },
  {
    icon: '📝',
    title: 'Code Review',
    description: 'Detailed feedback on your solutions and best practice recommendations.',
    ccolor: '#e0f7fa' // Light yellow
  },
  {
    icon: '📚',
    title: 'Learning Resources',
    description: 'Curated materials to help you understand and fix similar issues.',
    color: '#e0f7fa' // Light orange
  },
  {
    icon: '🔧',
    title: 'Tool Recommendations',
    description: 'Get suggestions for debugging tools and extensions.',
    color: '#e0f7fa' // Light cyan
  }
];

const Features = () => {
  const featuresContainerRef = useRef(null);
  const featuresRowRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const container = featuresContainerRef.current;
    const row = featuresRowRef.current;
    
    if (!container || !row) return;

    const containerWidth = container.offsetWidth;
    const rowWidth = row.scrollWidth;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= rowWidth - containerWidth) {
        scrollPosition = 0;
      }
      
      row.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationRef.current);
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="section features">
      <div className="container">
        <h2 className="section-title">Why Our Mentoring Works</h2>
        <p className="section-subtitle">
          Get unstuck faster with our specialized debugging assistance
        </p>
        <div className="features-container" ref={featuresContainerRef}>
          <div className="features-row" ref={featuresRowRef}>
            {[...features, ...features].map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ '--hover-color': feature.color }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="feature-learn-more">See example →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;