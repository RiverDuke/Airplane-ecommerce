import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, authCheck } from "../utils/api";

export default function Account() {
  const navigate = useNavigate();

  useEffect(() => {
    authCheck()
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg) {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="account">
      <div className="center_icon">
        <i className="bi bi-person-circle"></i>
      </div>
      <h2>Welcome User</h2>
      <button
        onClick={() => {
          logout().then(() => navigate("/login"));
        }}
      >
        Log Out
      </button>
      <Link className="mx-2" to="/account/add-article">
        Add Article
      </Link>
      <Link to="/account/create-product">Create Product</Link>
    </div>
  );
}
