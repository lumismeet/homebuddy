import roofImg from "@/assets/roof.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="section-label">How It Works</div>
      <h2 className="section-title">Simple, Seamless, and Stress-Free</h2>
      <div className="how-grid">
        <img src={roofImg} alt="Roof installation" style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-body">
              <h4>We Start With a Free In-Home Assessment</h4>
              <p>A certified specialist visits your home, inspects your gutters, and walks you through the best solution — with zero pressure and no upfront cost.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-body">
              <h4>Your Existing Gutters Are Cleaned &amp; Prepped</h4>
              <p>Before installation begins, our team thoroughly cleans and re-aligns your current gutters at no extra charge — so you start with a clean slate.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-body">
              <h4>ClearFlow Guard Fits Directly Over Your Gutters</h4>
              <p>Our micromesh system locks onto your existing gutters seamlessly — no demolition, no new gutter purchase, and no mess left behind.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-body">
              <h4>Enjoy Clear Gutters — Guaranteed for Life</h4>
              <p>Rain flows in, debris stays out. And if anything ever clogs, we come back and fix it at no cost to you — that's our lifetime promise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
