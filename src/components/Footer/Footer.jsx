import "./Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">

      {/* -------- TOP CONTENT -------- */}
      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-info">

          <div className="footer-logo">
            <h2>Ngo</h2>
            <p>Foundation</p>
          </div>

          <h4 className="footer-title">Core Values</h4>
          <p className="footer-text">
            At Charity 128, we prioritize transparency, integrity, and inclusivity.
            These values guide our actions as we work tirelessly to bridge the gap
            between those in need and those willing to help.
          </p>

          <h4 className="footer-title">Sign up for our newsletter</h4>

          <div className="newsletter">
            <input type="email" placeholder="Email" />
            <button>Signup</button>
          </div>

        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Useful links</h4>

          <a href="#">Home</a>
          <a href="#">Our Mission</a>
          <a href="#">Why Choose Us</a>
          <a href="#">Our Programs</a>
          <a href="#">Membership</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contacts">
          <h4>Our contacts</h4>

          <p>📧 information@office.com</p>
          <p>📞 +6329562949</p>
          <p>📍 2307 Beverley, New York</p>

          <div className="footer-social">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        © Charity 128. All Rights Reserved 2025. <span>Licensing</span>
      </div>

    </footer>
  );
}
