import { Link } from 'react-router-dom';
import { ArrowRight, MountainSnow, BookOpen, Activity, Flame } from 'lucide-react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Hope for the Children of <span>Kashmir</span></h1>
          <p>From the harsh winters to remote valley schooling, we are dedicated to bringing warmth, education, and healthcare to every child in Jammu & Kashmir.</p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-large" onClick={() => alert('Donation flow triggered!')}>
              <Flame size={20} /> Donate a Winter Kit
            </button>
            <Link to="/programs" className="btn btn-outline btn-large">
              Discover Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats">
        <div className="container impact-grid">
          <div className="stat-card">
            <h2 className="stat-number">15k+</h2>
            <p className="stat-label">Pherans & Blankets Donated</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">5k+</h2>
            <p className="stat-label">Students Educated</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">30+</h2>
            <p className="stat-label">Villages Reached</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Local Volunteers</p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section programs-overview">
        <div className="container">
          <h2 className="section-title">Our Core <span>Initiatives</span></h2>
          <div className="programs-grid">
            
            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://images.unsplash.com/photo-1485542790695-17f1853b0fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Winter Relief in Kashmir" />
                <div className="program-icon"><Flame size={24} /></div>
              </div>
              <div className="program-info">
                <h3>Winter Relief</h3>
                <p>Providing heavy blankets, pherans, and kangris to ensure children in remote Kashmiri villages stay warm during the harsh Chillai Kalan.</p>
                <Link to="/programs" className="read-more">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Education in Valleys" />
                <div className="program-icon"><BookOpen size={24} /></div>
              </div>
              <div className="program-info">
                <h3>Valley Education</h3>
                <p>Establishing community learning centers in Kupwara, Bandipora, and Anantnag to ensure continuous education despite weather or disruptions.</p>
                <Link to="/programs" className="read-more">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="program-card">
              <div className="program-img-wrapper">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Healthcare" />
                <div className="program-icon"><Activity size={24} /></div>
              </div>
              <div className="program-info">
                <h3>Mobile Healthcare</h3>
                <p>Deploying mobile medical camps to high-altitude areas where hospitals are inaccessible, focusing on child nutrition and immunizations.</p>
                <Link to="/programs" className="read-more">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Warm a Child's Heart This Winter</h2>
            <p>Your contribution can provide a Winter Survival Kit for a child in Kashmir, protecting them from sub-zero temperatures.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => alert('Donation modal!')}>Donate ₹1500 (One Kit)</button>
              <Link to="/involved" className="btn btn-outline">Join as a Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
