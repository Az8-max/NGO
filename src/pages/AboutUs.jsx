import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Story in the Last Frontier</h1>
          <p>Learn about our mission to bring hope, warmth, and education to the children of Alaska.</p>
        </div>
      </div>

      <section className="section about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                Our <span>Mission</span>
              </h2>
              <p>
                Founded in the heart of Anchorage, Alaska Hope Foundation believes that the children of the state deserve a future unhindered by geography, harsh Arctic winters, or circumstance.
              </p>
              <p>
                We work directly with local communities in areas like the Mat-Su Borough, Fairbanks, and remote bush villages to build resilient support systems. Whether it's providing heavy sub-zero parkas or setting up remote learning centers, our goal is to nurture the next generation of Alaskan youth.
              </p>
              <div className="mission-points">
                <div className="point">
                  <div className="point-icon">🏔️</div>
                  <div className="point-text">
                    <h4>Vision</h4>
                    <p>A thriving Alaska where every child has access to warmth, education, and health.</p>
                  </div>
                </div>
                <div className="point">
                  <div className="point-icon">🤝</div>
                  <div className="point-text">
                    <h4>Values</h4>
                    <p>Resilience, Community, Transparency, and Empathy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1525026116345-cb37e616cbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Children in Alaska" />
              <div className="image-accent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-history">
        <div className="container">
          <h2 className="section-title">Our <span>Journey</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>The First Winter Drive</h3>
                <p>Started in Anchorage by a group of local university students, distributing 500 sub-zero blankets in surrounding communities during the darkest months.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>Bush Community Education</h3>
                <p>Established our first remote community school near Fairbanks, ensuring education continues even when roads are blocked by blizzards.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Healthcare Expansion</h3>
                <p>Launched bush plane medical flights, reaching over 10,000 children in high-latitude off-grid communities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <h3>A Statewide Network</h3>
                <p>Operating across the state, supported by over 500 local volunteers dedicated to uplifting Alaskan youth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
