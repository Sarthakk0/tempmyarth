import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="small-title">Who we are</p>

        <h1 className="hero-heading">
          Empowering Lives Through Skill <br /> Development
        </h1>

        <p className="desc">
          Transforming potential into success by providing the tools, resources,
          and training needed to thrive in today&apos;s job market.
        </p>

        <div className="hero-buttons">
          <button className="join-btn">Join us now</button>
          <button className="donate-outline">Donate</button>
        </div>

        {/* 🔻 Bottom section you asked for */}
        <div className="hero-bottom">
          <div className="hero-location">
            <div className="location-icon">📍</div>
            <div className="location-text">
              1504878, Rm Nisha Nagar, Delhi
            </div>
          </div>

          <div className="hero-org">
            <div className="avatar-group">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="member"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
              />
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="member"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="member"
              />
            </div>
           
          </div>
           <div className="hero-org-text">Join Our Organization</div>
        </div>
      </div>
    </div>
  );
}
