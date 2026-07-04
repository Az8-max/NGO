import './Contact.css';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our Srinagar office for any inquiries, partnerships, or volunteering details.</p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info-container">
              <h2>Reach the <span>Valley</span></h2>
              <p className="contact-intro">Our local team in Srinagar is ready to answer any questions you might have about our relief programs, donations, or joining our ground network.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={24} /></div>
                  <div className="contact-text">
                    <h3>Srinagar Office</h3>
                    <p>Residency Road, Lal Chowk<br/>Srinagar, Jammu & Kashmir 190001</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={24} /></div>
                  <div className="contact-text">
                    <h3>Phone & WhatsApp</h3>
                    <p>+91 194 245 0000<br/>Mon-Sat from 9am to 5pm</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><Mail size={24} /></div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>salaam@kashmirhope.ngo<br/>partnerships@kashmirhope.ngo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" required placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" required placeholder="Last Name" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required placeholder="name@example.com" />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" className="form-control" required placeholder="How can we help?" />
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" required placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="map-placeholder">
          <p>Interactive Map of Srinagar HQ Here</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
