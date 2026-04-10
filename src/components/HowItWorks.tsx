import roofImg from "@/assets/roof.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="section-label">How It Works</div>
      <h2 className="section-title">Award-Winning Technology That Performs</h2>
      <div className="how-grid">
        <img src={roofImg} alt="Roof installation" style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>Professionals Clean Your Existing Gutters</h4>
              <p>Our certified team arrives, cleans, and realigns your gutters completely — for free — saving you thousands in replacement costs.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>LeafGuard Pro Is Installed Over Existing Gutters</h4>
              <p>No need to replace your gutters. Our system installs directly on top, saving you thousands and reducing installation time to ~6 hours.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>Water Flows Through, Debris Sheds Off</h4>
              <p>Even in the worst downpours, water enters the gutter while debris is effectively shed away from your home.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h4>Backed by a Lifetime No-Clog Guarantee</h4>
              <p>We're so confident in our system that we offer a true lifetime warranty — if your gutters clog, we fix it free.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
