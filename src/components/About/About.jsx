import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      <h2 className="mission-text">
        OUR MISSION IS TO <span>BRIDGE POTENTIAL</span> AND <span>OPPORTUNITY</span><br />
        THROUGH TAILORED TRAINING PROGRAMS FOR ALL AGES.
      </h2>

      {/* first card */}
      <div className="about-wrapper">

        <div className="about-content">

          <h3 className="about-heading">
            About <span>Ngo Foundation</span>
          </h3>

          <div className="bullet">
            <div className="square"></div>
            <span className="title">Who we are–</span>
          </div>

          <p className="about-para">
            Founded in 2010, our organization has been at the forefront of workforce
            development, focusing on equipping underprivileged youth and adults
            with the skills they need to succeed. From basic education to advanced
            vocational training, we provide a range of programs designed to meet
            the unique needs of our community.
          </p>
        </div>

        <img
          className="about-photo"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000"
          alt=""
        />
      </div>


      {/* second section */}
      <div className="vision-box">

        <img
          className="vision-img"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000"
          alt=""
        />

        <div className="vision-content">

          <div className="bullet">
            <div className="square"></div>
            <span className="title">Our Vision and mission</span>
          </div>

          <p className="quote">
            “Unlocking Potential, Creating Opportunities.”
          </p>

          <p className="about-para">
            Empowering underprivileged individuals with the skills and support needed
            for meaningful employment, envisioning a world where everyone can achieve
            their full potential through equal opportunities.
          </p>

          <button className="vision-btn">Become Our Member →</button>
        </div>
      </div>

    </section>
  );
}
