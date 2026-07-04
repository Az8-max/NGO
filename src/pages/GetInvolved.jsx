import './GetInvolved.css';
import { Heart, Users, Briefcase } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="involved-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in spreading warmth and education across the Valley. Your support makes our mission possible.</p>
        </div>
      </div>

      <section className="section ways-to-help">
        <div className="container">
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon"><Heart size={40} /></div>
              <h3>Donate a Winter Kit</h3>
              <p>A contribution of ₹1500 provides a heavy blanket, a traditional pheran, and warm socks for a child enduring the valley's winter.</p>
              <button className="btn btn-primary w-100" onClick={() => alert('Donation modal!')}>Donate Now</button>
            </div>
            
            <div className="help-card">
              <div className="help-icon"><Users size={40} /></div>
              <h3>Volunteer Locally</h3>
              <p>Are you based in Srinagar or nearby districts? Join our ground team to help distribute supplies and assist in community schools.</p>
              <button className="btn btn-secondary w-100" onClick={() => document.getElementById('volunteer-form').scrollIntoView({behavior: 'smooth'})}>Join the Ground Team</button>
            </div>

            <div className="help-card">
              <div className="help-icon"><Briefcase size={40} /></div>
              <h3>Corporate & NGO Partners</h3>
              <p>We partner with businesses and international NGOs to scale our relief efforts during natural emergencies or harsh winters.</p>
              <button className="btn btn-accent w-100" onClick={() => alert('Contact us for partnerships!')}>Partner With Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer-form" className="section volunteer-section">
        <div className="container">
          <div className="volunteer-container">
            <div className="volunteer-info">
              <h2>Join Our <span>Kashmir</span> Ground Team</h2>
              <p>We are constantly looking for passionate locals and visiting volunteers to help us navigate the difficult terrain and reach those most in need. Fill out the form, and our Srinagar office will contact you.</p>
              <img src="https://images.unsplash.com/photo-1593113580326-5b48db3663a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Volunteers in Kashmir" className="volunteer-img" />
            </div>
            <div className="volunteer-form-container">
              <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" required placeholder="Tariq Ahmad" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required placeholder="tariq@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number (WhatsApp preferred)</label>
                  <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label>Location (District in Kashmir)</label>
                  <select className="form-control" required>
                    <option value="">Select your location...</option>
                    <option value="srinagar">Srinagar</option>
                    <option value="anantnag">Anantnag</option>
                    <option value="baramulla">Baramulla</option>
                    <option value="kupwara">Kupwara</option>
                    <option value="other">Other / Not in Kashmir</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>How can you help?</label>
                  <textarea className="form-control" required placeholder="E.g., I have a 4x4 vehicle for winter distribution, or I can teach math..."></textarea>
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
