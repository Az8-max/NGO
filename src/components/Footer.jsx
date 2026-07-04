import { Link } from 'react-router-dom';
import { MountainSnow, Globe, MessageCircle, Camera, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo footer-logo">
            <MountainSnow size={28} className="logo-icon" />
            <span>Kashmir Hope</span>
          </Link>
          <p className="footer-desc">
            Empowering the children of the Kashmir Valley through winter relief, valley education, and community healthcare.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Website"><Globe size={20} /></a>
            <a href="#" aria-label="Message"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Photos"><Camera size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/programs">Kashmir Programs</Link></li>
            <li><Link to="/involved">Get Involved</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <MapPin size={18} />
              <span>Residency Road, Lal Chowk<br/>Srinagar, Jammu & Kashmir 190001</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 194 245 0000</span>
            </li>
            <li>
              <Mail size={18} />
              <span>salaam@kashmirhope.ngo</span>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Valley Updates</h3>
          <p>Subscribe to our newsletter to receive updates on our impact across Kashmir.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kashmir Hope Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
