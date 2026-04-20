import holdingImg from "@/assets/holding.png";

const HeroSection = () => {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-content">
        <div className="hero-badge">📍 Now Serving Your Area!</div>
        <h1>
          Stop Cleaning Gutters Forever, <span className="highlight">Protect Your Home</span> with Premium Gutter Guards
        </h1>
        <p className="hero-sub">Designed for all home types , works with your existing gutters, no full replacement required.</p>
        <div className="hero-bullets">
          <div className="hero-bullet">
            <div className="bullet-num">1</div> Lifetime No-Clog Guarantee , We Fix It Free, Forever
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">2</div> Shields Your Roof, Walls &amp; Foundation from Water Damage
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">3</div> Ultra-Fine 275-Micron Surgical Steel Mesh
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">4</div> Rust-Proof Stainless Steel , Built to Last Decades
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">5</div> Certified Professionals Handle the Entire Job
          </div>
        </div>
        <div className="hero-cta-group">
          <a href="#estimate" className="btn-primary">Get My Free Estimate</a>
        </div>
        <div className="hero-note">Free in-home estimates with no obligation. Pricing varies by home size and scope.</div>
      </div>
      <div className="hero-image-col">
        <img src={holdingImg} alt="Homeowner with LeafGuard Pro" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-num">✅</div>
            <div className="hero-stat-label">Certified Installers</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">🎁</div>
            <div className="hero-stat-label">Free Estimate</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">∞</div>
            <div className="hero-stat-label">Lifetime Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
