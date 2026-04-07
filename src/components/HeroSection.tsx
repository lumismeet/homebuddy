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
        <div className="hero-img-placeholder">
          <svg className="ph-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="12" width="56" height="40" rx="4" stroke="#2a7a2a" strokeWidth="2.5" />
            <circle cx="24" cy="28" r="8" stroke="#2a7a2a" strokeWidth="2.5" />
            <path d="M4 44 L20 30 L32 42 L44 28 L60 44" stroke="#2a7a2a" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
          Add your hero image here
        </div>
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
