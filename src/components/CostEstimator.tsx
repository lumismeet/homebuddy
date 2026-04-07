import { useState } from "react";

const sqftOptions = ["1000", "1500", "2000", "2500+"];

const CostEstimator = () => {
  const [selectedSqft, setSelectedSqft] = useState("2500+");

  return (
    <section className="cost-estimator" id="estimate">
      <div className="cost-badge">🏷️ You will be surprised how affordable LeafGuard Pro is!</div>
      <h2>See How Much Would LeafGuard Pro Cost In Your Location</h2>
      <div className="estimator-card">
        <h3>Select your approximate home square footage</h3>
        <div className="sqft-options">
          {sqftOptions.map((option) => (
            <button
              key={option}
              className={`sqft-btn${selectedSqft === option ? " active" : ""}`}
              onClick={() => setSelectedSqft(option)}
            >
              <div className="sqft-num">{option}</div>
              <div className="sqft-unit">sq.ft.</div>
            </button>
          ))}
        </div>
        <button className="estimate-btn">Estimate LeafGuard Pro Cost</button>
      </div>
    </section>
  );
};

export default CostEstimator;
