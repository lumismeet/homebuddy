import stacksImg from "@/assets/stacks.png";
import { Handshake } from "lucide-react";

const VeteransSection = () => {
  return (
    <div className="veterans">
      <div className="veterans-text">
        <h2 style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Handshake size={28} /> Protecting the Homes of Our Community
        </h2>
        <p>
          At ClearFlow Guard, we believe every homeowner deserves a worry-free home. That's why we work hard to keep our
          pricing fair and our service exceptional , from the first call to the final nail.
        </p>
        <p>
          We partner with local neighborhoods to offer{" "}
          <strong>seasonal promotions and flexible financing options</strong> that make premium gutter protection
          accessible for every budget. No hidden fees, no pressure.
        </p>
        <p>
          It's our way of investing in the communities we serve , because when your home is protected, the whole neighborhood wins.
        </p>
        <a href="#estimate" className="btn-primary" style={{ marginTop: "10px", width: "fit-content" }}>
          See Current Promotions
        </a>
      </div>
      <div className="veterans-img" style={{ padding: 0, overflow: "hidden" }}>
        <img src={stacksImg} alt="Community homeowners" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
};

export default VeteransSection;
