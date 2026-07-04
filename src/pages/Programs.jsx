import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Kashmir Initiatives</h1>
          <p>Tackling the unique challenges of the Kashmir Valley through targeted winter relief, remote education, and mobile healthcare.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          
          {/* Winter Relief Program */}
          <div className="program-detail-card">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1485542790695-17f1853b0fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Winter Relief Program in Kashmir" />
            </div>
            <div className="program-detail-content">
              <h2>Winter <span>Relief</span> (Chillai Kalan)</h2>
              <p>During the harshest 40 days of winter known as Chillai Kalan, temperatures drop drastically. We ensure that children in marginalized communities have the warmth they need to survive and stay healthy.</p>
              <ul>
                <li>Distribution of heavy thermal blankets and jackets.</li>
                <li>Providing traditional Kashmiri Pherans to children.</li>
                <li>Installing Bukhari (traditional heaters) in community centers.</li>
                <li>Emergency winter kits for families stranded by heavy snowfall.</li>
              </ul>
              <button className="btn btn-primary" onClick={() => alert('Support this program!')}>Support Winter Relief</button>
            </div>
          </div>

          {/* Valley Education Program */}
          <div className="program-detail-card reverse">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Valley Education Program" />
            </div>
            <div className="program-detail-content">
              <h2>Valley <span>Education</span></h2>
              <p>In many remote districts of Kashmir, heavy snowfall and lack of infrastructure disrupt education for months. We establish resilient community schools to keep the learning going.</p>
              <ul>
                <li>Setting up winter-proofed community classrooms.</li>
                <li>Providing local educators with stipends and training.</li>
                <li>Supplying books, stationery, and winter uniforms.</li>
                <li>Digital literacy initiatives in accessible regions.</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => alert('Support this program!')}>Support Education</button>
            </div>
          </div>

          {/* Mobile Healthcare Program */}
          <div className="program-detail-card">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Mobile Healthcare in Kashmir" />
            </div>
            <div className="program-detail-content">
              <h2>Mobile <span>Healthcare</span></h2>
              <p>Many mountainous and nomadic communities lack access to basic medical facilities. Our mobile health clinics travel across difficult terrains to reach the most vulnerable children.</p>
              <ul>
                <li>Mobile medical camps in remote villages (e.g., Gurez, Tangdhar).</li>
                <li>Routine immunizations and health screenings.</li>
                <li>Nutritional supplements for malnourished infants.</li>
                <li>Mental health and trauma counseling for youth.</li>
              </ul>
              <button className="btn btn-accent" onClick={() => alert('Support this program!')}>Support Healthcare</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Programs;
