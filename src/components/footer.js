export default function Footer() {
  return (
    <div className="footer">
      <div>
        <i class="bi bi-0-circle" style={{ color: "green" }}></i>
        <i class="bi bi-0-circle"></i>
        <i class="bi bi-0-circle"></i>
        <i class="bi bi-0-circle"></i>
        <p>hello</p>
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
      <p>Copyright © 2022 River Duke. All rights reserved.</p> */}
    </div>
  );
}
