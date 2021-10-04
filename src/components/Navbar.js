import { memo } from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/hotels">
              <a className="nav-link">Hotels</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default memo(Navbar);
