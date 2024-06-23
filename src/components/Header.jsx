import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>
        <Link to="/">Dream List</Link>
      </h3>
      <div className="about_link">
        <Link to="/about">About</Link>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
