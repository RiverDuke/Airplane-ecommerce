import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-logo image-sizing"></div>
      <div className="text-center buy-banner">
        <p>Your Aviators Are Here</p>
        <p>Quality Aviator Sunglasses at a Fair Price</p>
        <Link className="btn btn-secondary">ORDER NOW</Link>
      </div>
    </div>
  );
}
