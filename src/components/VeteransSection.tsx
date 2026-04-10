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
      <div className="veterans-img" style={{ padding: 0, overflow: "hidden" }}>
        <img src="/src/assets/stacks.png" alt="Veterans" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
};

export default VeteransSection;
