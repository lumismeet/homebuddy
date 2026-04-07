const VeteransSection = () => {
  return (
    <div className="veterans">
      <div className="veterans-text">
        <h2>🇺🇸 Thank You To Our Veterans!</h2>
        <p>
          Many LeafGuard Pro employees, customers, family and friends are military veterans and we wanted to thank them
          for their service.
        </p>
        <p>
          So… for anyone who served in the U.S. Military — <strong>active or retired</strong> — we take an{" "}
          <strong>EXTRA 10% off</strong> the cost of LeafGuard Pro.
        </p>
        <p>
          As a proud, American-founded business, it's our small way of saying, "Thank you for your service to our great
          nation!"
        </p>
        <a href="#estimate" className="btn-primary" style={{ marginTop: "10px", width: "fit-content" }}>
          Claim Your Discount
        </a>
      </div>
      <div className="veterans-img">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="12" width="56" height="40" rx="4" stroke="#8a94a8" strokeWidth="2" />
          <circle cx="24" cy="28" r="8" stroke="#8a94a8" strokeWidth="2" />
          <path d="M4 44 L20 30 L32 42 L44 28 L60 44" stroke="#8a94a8" strokeWidth="2" />
        </svg>
        <span>Add your image here</span>
      </div>
    </div>
  );
};

export default VeteransSection;
