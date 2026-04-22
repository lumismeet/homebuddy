import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div>
        <div style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "6px", display: "flex", alignItems: "center", gap: 6 }}>
          <Droplets size={18} /> ClearFlow Guard
        </div>
        <div className="footer-copy">© 2026 ClearFlow Guard. All rights reserved.</div>
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
      <div className="footer-advertorial-disclaimer">
        ClearFlowGuard is an independent, advertising-supported comparison website. The products and offers that appear on this website are from third-party home service partners and advertisers from which ClearFlowGuard may receive compensation. This compensation may influence which products we feature, how they are presented, and where they appear on the page. ClearFlowGuard is not a licensed home service provider or contractor. Content on this site is provided for informational purposes only and does not constitute home improvement advice. Available rates and offers vary by location, home type, and other factors and are subject to change without notice. Not all products or offers are available in all areas.
      </div>
    </footer>
  );
};

export default Footer;
