import soiledImg from "@/assets/soiled.png";

const MicromeshCallout = () => {
  return (
    <div className="micromesh-callout">
      <div className="micromesh-text">
        <div className="kicker">Built Different</div>
        <h2>Engineering That Outlasts Every Season</h2>
        <p>
          ClearFlow Guard uses a surgical-grade stainless steel micromesh that won't rust, warp, or weaken over time.
          The 275-micron openings let water flow freely while rejecting every type of debris — leaves, seeds, needles, and even roof grit.
        </p>
        <div className="micromesh-specs">
          <div className="spec-chip">
            <div className="spec-chip-val">275μ</div>
            <div className="spec-chip-label">Micron Filtration</div>
          </div>
          <div className="spec-chip">
            <div className="spec-chip-val">316</div>
            <div className="spec-chip-label">Surgical Steel Grade</div>
          </div>
          <div className="spec-chip">
            <div className="spec-chip-val">∞</div>
            <div className="spec-chip-label">No-Clog Guarantee</div>
          </div>
        </div>
      </div>
      <div className="micromesh-img-col" style={{ padding: 0, overflow: "hidden" }}>
        <img src={soiledImg} alt="Clogged gutter debris" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
};

export default MicromeshCallout;
