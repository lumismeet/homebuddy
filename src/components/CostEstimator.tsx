import { useState } from "react";

const sqftOptions = ["1000", "1500", "2000", "2500+"];

const CostEstimator = () => {
  const [selectedSqft, setSelectedSqft] = useState("2500+");

  return (
    <section className="cost-estimator" id="estimate">
      <div className="cost-badge">🏷️ Most homeowners are surprised by how affordable it is!</div>
      <h2>Find Out What ClearFlow Guard Would Cost for Your Home</h2>
      <div className="estimator-card">
        <h3>Choose your approximate home square footage</h3>
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
        <button className="estimate-btn">Get My Free Cost Estimate</button>
      </div>
    </section>
  );
};

export default CostEstimator;
