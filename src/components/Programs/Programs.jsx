import "./Programs.css";

export default function Programs() {
  return (
    <section className="programs-section">

      <h3 className="programs-subtitle">EXPLORE PROGRAMS</h3>
      <h2 className="programs-title">
        Empower Your Future with Our Tailored Programs
      </h2>

     <div className="programs-top">

  <div className="programs-info">

    <div className="programs-info-header">
      <div className="square"></div>
      <h4>Ngo Programs</h4>
    </div>

    <p className="programs-info-text">
      Our tailored programs empower individuals at every
      stage of life, providing the skills and support needed
      to secure meaningful employment and build a better future.
    </p>

    <button className="programs-learn-btn">Discover More →</button>
  </div>

  <div className="programs-image-wrapper">
    <img
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
      alt="program"
      className="programs-img"
    />
    <div className="pink-dot"></div>
  </div>

</div>


      {/* ======== CARDS ======== */}
      <div className="programs-cards">

        <div className="program-card">
          <h5>Employability at 12–18</h5>
          <p>
            We offer foundational skills training for youth,
            focusing on literacy, numeracy, and life skills to
            prepare them for future education and career opportunities.
          </p>

          <ul>
            <li>✔ Basic education support</li>
            <li>✔ Career awareness and exploration</li>
            <li>✔ Mentorship and guidance</li>
          </ul>

          <button>Learn More →</button>
        </div>

        <div className="program-card">
          <h5>Employability at 19–30</h5>
          <p>
            We offer foundational skills training for youth,
            focusing on literacy, numeracy, and life skills to
            prepare them for future education and career opportunities.
          </p>

          <ul>
            <li>✔ Basic education support</li>
            <li>✔ Career awareness and exploration</li>
            <li>✔ Mentorship and guidance</li>
          </ul>

          <button>Learn More →</button>
        </div>

        <div className="program-card">
          <h5>Employability at 30+</h5>
          <p>
            We offer foundational skills training for youth,
            focusing on literacy, numeracy, and life skills to
            prepare them for future education and career opportunities.
          </p>

          <ul>
            <li>✔ Basic education support</li>
            <li>✔ Career awareness and exploration</li>
            <li>✔ Mentorship and guidance</li>
          </ul>

          <button>Learn More →</button>
        </div>

      </div>

    </section>
  );
}
