import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>POSITIVE RATE GEAR</h3>
      <div className="d-flex position-absolute top-50 start-50 translate-middle align-middle">
        <Link className="homeBtn">Home</Link>
        <Link>Catalog</Link>
      </div>

      <div>
        <i class="bi bi-search"></i>
        <i class="bi bi-person"></i>
        <i class="bi bi-bag"></i>
      </div>
    </div>
  );
}
