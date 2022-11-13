import { Link } from "react-router-dom";
import gettingReady from "../images/getting-ready.jpg";
import fatherSon from "../images/library2.jpg";
import thrusters from "../images/thrust-levers5.jpg";
import flightTraining from "../images/sunglasses3.jpg";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-logo image-sizing"></div>
      <div className="text-center buy-banner">
        <p>Your Aviators Are Here</p>
        <p>Quality Aviator Sunglasses at a Fair Price</p>
        <Link className="btn btn-secondary">ORDER NOW</Link>
      </div>
      <div className="card-real">
        <div className="card" style={{ width: "22rem" }}>
          <div className="card-img-top classic-img-centered" alt="..."></div>
          <div className="card-body">
            <h5 className="card-title">Equipment and Gear</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="#" className="btn btn-outline-dark">
              EQUIPMENT CHECKLIST
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img src={gettingReady} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Wright Stuff</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="#" className="btn btn-outline-dark">
              READ THE PAPER
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img src={fatherSon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Aviators' Essential Library</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href="#" className="btn btn-outline-dark">
              BEGIN GROUND SCHOOL
            </Link>
          </div>
        </div>
      </div>
      <div className="image-group">
        <div>
          <Link className="picture image-name-training">
            <div>FLIGHT TRAINING</div>
          </Link>
          <div className="picture image-name-airlinePrep">
            <p>AIRLINE PREP</p>
          </div>
          <div className="picture"></div>
        </div>
        <div>
          <div className="picture"></div>
          <div className="picture"></div>
          <div className="picture"></div>
        </div>
      </div>
    </div>
  );
}
