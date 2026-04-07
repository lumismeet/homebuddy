const Footer = () => {
  return (
    <footer>
      <div>
        <div style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "6px" }}>🍃 LeafGuard Pro</div>
        <div className="footer-copy">© 2026 LeafGuard Pro. All rights reserved.</div>
      </div>
      <div className="footer-links">
        <a href="#">Terms Of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Do Not Sell</a>
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
      </div>
      <div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "10px", textAlign: "right" }}>
          Follow Us
        </div>
        <div className="social-icons">
          <a className="social-icon" href="#">f</a>
          <a className="social-icon" href="#">in</a>
          <a className="social-icon" href="#">▶</a>
          <a className="social-icon" href="#">𝕏</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
