import visa from "../images/visa.png";
import paypal from "../images/paypal.png";
import discover from "../images/discover.png";
import american from "../images/american-express.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="payment-copyright">
        <img src={visa} width="50px" />
        <img src={discover} width="50px" />
        <img src={american} width="50px" />
        <img src={paypal} width="50px" />
        <p>
          Icons made by Freepik from{" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noreferrer"
          >
            www.flaticon.com
          </a>
        </p>
        <p>Copyright © 2022 River Duke. All rights reserved.</p>
      </div>

      <div>
        <p>Newsletter</p>
        <div class="input-group newsletter-btn">
          <input
            type="text"
            class="form-control "
            placeholder="Email address"
            aria-label="Recipient's email"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
            SUBSCRIBE
          </span>
        </div>
      </div>
      {/* <hr />
       */}
    </div>
  );
}
