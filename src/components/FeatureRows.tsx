import stacksImg from "@/assets/stacks.png";
import roofImg from "@/assets/roof.png";

const PhIconWide = () => (
  <svg className="ph-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="56" height="40" rx="4" stroke="#5a7a5a" strokeWidth="2" />
    <circle cx="24" cy="28" r="8" stroke="#5a7a5a" strokeWidth="2" />
    <path d="M4 44 L20 30 L32 42 L44 28 L60 44" stroke="#5a7a5a" strokeWidth="2" />
  </svg>
);

const FeatureRows = () => {
  return (
    <>
      {/* AFFORDABLE */}
      <div className="feature-row bg-light">
        <img src={stacksImg} alt="Affordable installation" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-text">
          <h2>Why ClearFlow Guard Costs Less Than You'd Expect</h2>
          <p>
            Because ClearFlow Guard works with your current gutters, you're{" "}
            <strong>never paying for a full gutter replacement</strong>. Our team handles everything in a single visit —
            cutting down on labor time and keeping your total cost surprisingly low.
          </p>
        </div>
      </div>

      {/* PROTECTS HOME */}
      <div className="feature-row reverse">
        <img src={roofImg} alt="Home protection" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-text">
          <h2>Clogged Gutters Can Cost You More Than You Think</h2>
          <p>
            When gutters overflow, the damage spreads fast. ClearFlow Guard helps you avoid{" "}
            <strong>foundation erosion, roof deterioration, basement leaks, and costly landscape repair</strong> —
            all of which can result from a single season of neglected gutters.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureRows;
