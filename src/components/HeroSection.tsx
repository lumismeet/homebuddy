const HeroSection = () => {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="hero-content">
        <div className="hero-badge">📍 Available in Your Location!</div>
        <h1>
          How Over <span className="highlight">410,000 Americans</span> Increased Their Property Value In Under 6 Hours*
        </h1>
        <p className="hero-sub">Ideal for detached and semi-detached homes with sloped roofs.</p>
        <div className="hero-bullets">
          <div className="hero-bullet">
            <div className="bullet-num">1</div> Lifetime Warranty With No-Clog Guarantee
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">2</div> Helps Protect Foundation &amp; Roof
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">3</div> High Filtration Ability — 275 Microns Fine
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">4</div> Stainless Steel Resists Rust &amp; Decay
          </div>
          <div className="hero-bullet">
            <div className="bullet-num">5</div> Award-Winning Gutter Protection System
          </div>
        </div>
        <div className="hero-cta-group">
          <a href="#estimate" className="btn-primary">Get Free Estimate</a>
        </div>
        <div className="hero-note">* Installation time may vary depending on home size and scope of work.</div>
      </div>
      <div className="hero-image-col">
        <img src="/src/assets/holding.png" alt="Homeowner with LeafGuard Pro" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-num">42M+</div>
            <div className="hero-stat-label">Feet Installed</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">0</div>
            <div className="hero-stat-label">Clogged Gutters</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">6 hrs</div>
            <div className="hero-stat-label">Avg. Install</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
