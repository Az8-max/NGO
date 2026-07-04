import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Our Story in the Valley</h1>
          <p>Learn about our mission to bring hope, warmth, and education to the children of Jammu & Kashmir.</p>
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
                Founded in the heart of Srinagar, Kashmir Hope Foundation believes that the children of the valley deserve a future unhindered by geography, harsh winters, or circumstance.
              </p>
              <p>
                We work directly with local communities in districts like Kupwara, Bandipora, and Anantnag to build resilient support systems. Whether it's providing heavy winter pherans or setting up remote learning centers, our goal is to nurture the next generation of Kashmiri youth.
              </p>
              <div className="mission-points">
                <div className="point">
                  <div className="point-icon">🏔️</div>
                  <div className="point-text">
                    <h4>Vision</h4>
                    <p>A thriving Kashmir where every child has access to warmth, education, and health.</p>
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
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Children in Kashmir Valley" />
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
                <p>Started in Srinagar by a group of local university students, distributing 500 blankets in Dal Lake communities during Chillai Kalan.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>Remote Valley Education</h3>
                <p>Established our first remote community school in Kupwara, ensuring education continues even when roads are blocked by snow.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Healthcare Expansion</h3>
                <p>Launched mobile medical camps, reaching over 10,000 children in high-altitude nomadic (Bakarwal) communities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <h3>A Valley-Wide Network</h3>
                <p>Operating across 8 districts in J&K, supported by over 500 local volunteers dedicated to uplifting Kashmiri youth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
