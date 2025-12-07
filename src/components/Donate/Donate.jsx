import "./Donate.css";

export default function Donate() {
  return (
    <section className="donate-section">

      <div className="donate-box">

        {/* LEFT */}
        <div className="donate-left">
          <h2>Change Lives, One <br/>Donation at a Time.</h2>

          <p>
            Your donation helps empower underprivileged individuals with the
            skills and opportunities needed for a brighter future.
          </p>

          <button className="donate-btn">Donate Now</button>
        </div>

        {/* RIGHT IMAGES */}
{/* RIGHT IMAGES */}
<div className="donate-masonry">
  <img className="donate-img img1" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800"/>
  <img className="donate-img img2" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800" />
  <img className="donate-img img3" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=800" />
  <img className="donate-img img4" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800" />
  <img className="donate-img img5" src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=800" />
  <img className="donate-img img6" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800" />
</div>





      </div>
    </section>
  );
}
