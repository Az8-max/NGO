import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Alaska Initiatives</h1>
          <p>Tackling the unique challenges of the Last Frontier through targeted winter relief, remote education, and bush plane healthcare.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          
          {/* Winter Relief Program */}
          <div className="program-detail-card">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Winter Relief Program in Alaska" />
            </div>
            <div className="program-detail-content">
              <h2>Arctic Winter <span>Relief</span></h2>
              <p>During the harshest months of winter, temperatures in the interior drop drastically. We ensure that children in marginalized communities have the warmth they need to survive and stay healthy.</p>
              <ul>
                <li>Distribution of heavy sub-zero parkas and snow boots.</li>
                <li>Providing thermal blankets to off-grid families.</li>
                <li>Installing efficient heating systems in community centers.</li>
                <li>Emergency winter kits for families stranded by blizzards.</li>
              </ul>
              <button className="btn btn-primary" onClick={() => alert('Support this program!')}>Support Winter Relief</button>
            </div>
          </div>

          {/* Valley Education Program */}
          <div className="program-detail-card reverse">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bush Education Program" />
            </div>
            <div className="program-detail-content">
              <h2>Bush Community <span>Education</span></h2>
              <p>In many remote districts of Alaska, heavy snowfall and lack of infrastructure disrupt education for months. We establish resilient community schools to keep the learning going.</p>
              <ul>
                <li>Setting up winter-proofed community classrooms.</li>
                <li>Providing local educators with stipends and training.</li>
                <li>Supplying books, stationery, and winter gear.</li>
                <li>Satellite internet initiatives for accessible digital learning.</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => alert('Support this program!')}>Support Education</button>
            </div>
          </div>

          {/* Mobile Healthcare Program */}
          <div className="program-detail-card">
            <div className="program-detail-image">
              <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Bush Plane Healthcare in Alaska" />
            </div>
            <div className="program-detail-content">
              <h2>Bush Plane <span>Healthcare</span></h2>
              <p>Many isolated communities lack access to basic medical facilities. Our airborne health clinics travel across difficult terrains via bush planes to reach the most vulnerable children.</p>
              <ul>
                <li>Medical camps flown into remote villages (e.g., Nome, Bethel).</li>
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
