import { ShieldCheck, CalendarCheck, Star, Wrench } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="trust-item"><ShieldCheck className="trust-icon" size={22} /> Lifetime No-Clog Guarantee</div>
      <div className="trust-item"><CalendarCheck className="trust-icon" size={22} /> Same-Day Installation Available</div>
      <div className="trust-item"><Star className="trust-icon" size={22} /> 5-Star Rated Service</div>
      <div className="trust-item"><Wrench className="trust-icon" size={22} /> No Gutter Replacement Needed</div>
    </div>
  );
};

export default TrustBar;
