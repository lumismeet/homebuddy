import { Trophy } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar">
      <Trophy size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
      The Smart Way to <span>Protect Your Home</span> , Get a Free Gutter Guard Estimate Today!
    </div>
  );
};

export default TopBar;
