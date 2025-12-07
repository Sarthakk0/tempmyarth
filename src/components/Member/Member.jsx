import "./Member.css";

export default function Member() {
  return (
    <section className="member-section" id="member">
      {/* Headings */}
      <h3 className="member-subtitle">BECOME A MEMBER</h3>
      <h2 className="member-title">
        Join us in empowering lives and shaping futures.
      </h2>

     {/* ---------- TOP ROW ---------- */}
<div className="member-top">

  {/* LEFT */}
  <div className="member-left">

    <div className="member-bullet">
      <div className="bullet-dot"></div>
      <h4>Create an Impact</h4>
    </div>

    <p className="member-desc">
      As a member, you gain access to exclusive resources, career support, and a
      community committed to making a difference. Choose a membership plan that
      fits your needs and start making an impact today.
    </p>

    <div className="impact-box">
      <p>“Be part of a like-minded community.”</p>
      <p>“Gain access to career-enhancing resources.”</p>
      <p>“Empower others through your support.”</p>
    </div>

  </div>

  {/* RIGHT 3 IMAGES */}
 <div className="member-images">
  <div className="img-side">
    <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=900" />
  </div>

  <div className="img-center">
    <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=900" />
  </div>

  <div className="img-side">
    <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=900" />
  </div>
</div>


</div>


      {/* ---------- PLANS ROW ---------- */}
      <div className="member-plans">
        <div className="plan-card">
          <p className="plan-name">Basic plan</p>
          <p className="plan-price">$19/mo</p>
          <div className="plan-divider" />
          <p className="plan-includes">Includes:</p>
          <ul className="plan-list">
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
          </ul>
          <button className="plan-btn">Become Our Member<span className="arrow"> →</span></button>
        </div>

        <div className="plan-card featured">
          <p className="plan-name">Most Popular</p>
          <p className="plan-price">$19/mo</p>
          <div className="plan-divider" />
          <p className="plan-includes">Includes:</p>
          <ul className="plan-list">
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
          </ul>
          <button className="plan-btn">Become Our Member<span className="arrow"> →</span></button>
        </div>

        <div className="plan-card">
          <p className="plan-name">Premium plan</p>
          <p className="plan-price">$19/mo</p>
          <div className="plan-divider" />
          <p className="plan-includes">Includes:</p>
          <ul className="plan-list">
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
            <li> Feature text goes here</li>
          </ul>
          <button className="plan-btn">Become Our Member<span className="arrow"> →</span></button>
        </div>
      </div>
    </section>
  );
}
