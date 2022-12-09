import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>POSITIVE RATE GEAR</h3>
      <div className="d-flex position-absolute top-50 start-50 translate-middle align-middle">
        <Link className="homeBtn" to="/">
          Home
        </Link>
        <Link className="homeBtn">Catalog</Link>
        <Link>Articles</Link>
      </div>

      <div>
        <i className="bi bi-search"></i>
        <Link to="/login">
          <i className="bi bi-person"></i>
        </Link>
        <i className="bi bi-bag"></i>
      </div>
    </div>
  );
}
