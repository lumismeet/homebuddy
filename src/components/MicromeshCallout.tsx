const MicromeshCallout = () => {
  return (
    <div className="micromesh-callout">
      <div className="micromesh-text">
        <div className="kicker">Technology</div>
        <h2>The Micromesh Technology</h2>
        <p>
          To protect your gutters from debris, our micromesh screen is made out of surgical grade stainless steel which
          is unlikely to rust or corrode. At only 275 microns fine, common debris simply cannot get through.
        </p>
        <div className="micromesh-specs">
          <div className="spec-chip">
            <div className="spec-chip-val">275μ</div>
            <div className="spec-chip-label">Microns Fine</div>
          </div>
          <div className="spec-chip">
            <div className="spec-chip-val">316</div>
            <div className="spec-chip-label">Surgical Grade Steel</div>
          </div>
          <div className="spec-chip">
            <div className="spec-chip-val">∞</div>
            <div className="spec-chip-label">Lifetime Warranty</div>
          </div>
        </div>
      </div>
      <div className="micromesh-img-col" style={{ padding: 0, overflow: "hidden" }}>
        <img src="/src/assets/soiled.png" alt="Clogged gutter debris" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
};

export default MicromeshCallout;
