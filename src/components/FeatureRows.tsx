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
          <h2>Why LeafGuard Pro Is So Affordable?</h2>
          <p>
            LeafGuard Pro installs directly on top of your existing gutters — so you're{" "}
            <strong>not required to buy all new gutters</strong>. This saves you thousands in material and labor costs.
            Our certified installers handle the entire job in a single visit, typically under 6 hours.
          </p>
        </div>
      </div>

      {/* PROTECTS HOME */}
      <div className="feature-row reverse">
        <img src={roofImg} alt="Home protection" style={{ width: "100%", height: "280px", objectFit: "cover", borderRadius: "12px", display: "block" }} />
        <div className="feature-text">
          <h2>LeafGuard Pro Helps Protect Your Entire Home</h2>
          <p>
            From roof to foundation, damage caused by clogged gutters can be devastating for your home. With LeafGuard
            Pro, <strong>you are protected from water-overflow related damage</strong> — including foundation cracks,
            roof rot, basement flooding, and landscape erosion.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureRows;
