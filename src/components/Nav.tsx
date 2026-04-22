import { Home } from "lucide-react";

const Nav = () => {
  return (
    <nav>
      <a className="logo" href="#">
        <div className="logo-icon"><Home size={22} color="white" /></div>
        <div>
          <div className="logo-text">Clear<span>Flow</span> Guard</div>
          <div className="logo-sub">Premium, Gutter Solutions</div>
        </div>
      </a>
      <a href="#" className="nav-contractor">I'm a contractor</a>
    </nav>
  );
};

export default Nav;

