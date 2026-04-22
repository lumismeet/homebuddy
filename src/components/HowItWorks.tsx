import roofImg from "@/assets/roof.png";

const steps = [
  {
    num: "1",
    title: "We Start With a Free In-Home Assessment",
    desc: "A certified specialist visits your home, inspects your gutters, and walks you through the best solution , with zero pressure and no upfront cost.",
  },
  {
    num: "2",
    title: "Your Existing Gutters Are Cleaned & Prepped",
    desc: "Before installation begins, our team thoroughly cleans and re-aligns your current gutters at no extra charge , so you start with a clean slate.",
  },
  {
    num: "3",
    title: "ClearFlow Guard Fits Directly Over Your Gutters",
    desc: "Our micromesh system locks onto your existing gutters seamlessly , no demolition, no new gutter purchase, and no mess left behind.",
  },
  {
    num: "4",
    title: "Enjoy Clear Gutters , Guaranteed for Life",
    desc: "Rain flows in, debris stays out. And if anything ever clogs, we come back and fix it at no cost to you , that's our lifetime promise.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="section-label">How It Works</div>
      <h2 className="section-title">Simple, Seamless, and Stress-Free</h2>
      <div className="how-grid">
        <img src={roofImg} alt="Roof installation" style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num-wrap">
                <span className="step-ring" />
                <span className="step-ring" />
                <span className="step-ring" />
                <div className="step-num">{step.num}</div>
              </div>
              <div className="step-body">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
