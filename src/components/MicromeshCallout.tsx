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
      <div className="micromesh-img-col">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="12" width="56" height="40" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <circle cx="24" cy="28" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <path d="M4 44 L20 30 L32 42 L44 28 L60 44" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        </svg>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", fontWeight: 600 }}>Add your image here</span>
      </div>
    </div>
  );
};

export default MicromeshCallout;
