import './GetInvolved.css';
import { Heart, Users, Briefcase } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="involved-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in spreading warmth and education across the state. Your support makes our mission possible.</p>
        </div>
      </div>

      <section className="section ways-to-help">
        <div className="container">
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon"><Heart size={40} /></div>
              <h3>Donate a Winter Kit</h3>
              <p>A contribution of $20 provides a heavy sub-zero parka, insulated gloves, and warm socks for a child enduring the Alaskan winter.</p>
              <button className="btn btn-primary w-100" onClick={() => alert('Donation modal!')}>Donate Now</button>
            </div>
            
            <div className="help-card">
              <div className="help-icon"><Users size={40} /></div>
              <h3>Volunteer Locally</h3>
              <p>Are you based in Anchorage, Fairbanks, or Juneau? Join our ground team to help distribute supplies and assist in community schools.</p>
              <button className="btn btn-secondary w-100" onClick={() => document.getElementById('volunteer-form').scrollIntoView({behavior: 'smooth'})}>Join the Ground Team</button>
            </div>

            <div className="help-card">
              <div className="help-icon"><Briefcase size={40} /></div>
              <h3>Corporate & NGO Partners</h3>
              <p>We partner with local businesses and national NGOs to scale our relief efforts during severe blizzards or extreme cold snaps.</p>
              <button className="btn btn-accent w-100" onClick={() => alert('Contact us for partnerships!')}>Partner With Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer-form" className="section volunteer-section">
        <div className="container">
          <div className="volunteer-container">
            <div className="volunteer-info">
              <h2>Join Our <span>Alaska</span> Ground Team</h2>
              <p>We are constantly looking for passionate locals and visiting volunteers to help us navigate the difficult terrain and reach those most in need. Fill out the form, and our Anchorage office will contact you.</p>
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Volunteers in Alaska" className="volunteer-img" />
            </div>
            <div className="volunteer-form-container">
              <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="(907) 555-0123" />
                </div>
                <div className="form-group">
                  <label>Location (Region in Alaska)</label>
                  <select className="form-control" required>
                    <option value="">Select your location...</option>
                    <option value="anchorage">Anchorage</option>
                    <option value="fairbanks">Fairbanks</option>
                    <option value="juneau">Juneau</option>
                    <option value="mat-su">Mat-Su Borough</option>
                    <option value="other">Other / Bush Community</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>How can you help?</label>
                  <textarea className="form-control" required placeholder="E.g., I have a bush plane for winter distribution, or I can teach math..."></textarea>
                </div>
                <button type="submit" className="btn btn-secondary w-100">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
