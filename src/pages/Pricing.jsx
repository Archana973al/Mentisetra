const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Access to basic courses',
        'Limited progress tracking',
        'Community support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      features: [
        'All basic features',
        'Advanced analytics',
        'Priority support',
        'Offline access'
      ],
      cta: 'Start Free Trial',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'Team management'
      ],
      cta: 'Contact Us'
    }
  ]
  
  const Pricing = () => {
    return (
      <main className="pricing-page">
        <section className="section">
          <div className="container">
            <h1 className="section-title">Pricing Plans</h1>
            <p className="section-subtitle">
              Choose the plan that fits your learning needs
            </p>
            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                >
                  {plan.featured && <div className="featured-badge">Popular</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span>{plan.price}</span>
                    {plan.period && <small>{plan.period}</small>}
                  </div>
                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }
  
  export default Pricing