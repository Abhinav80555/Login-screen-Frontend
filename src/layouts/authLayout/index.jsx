import { Link, Outlet } from "react-router-dom";
import { AUTH_BG_IMG, CASET, LOGO } from "../../helpher/helpher";
import "./auth.css";

export function AuthLayout() {
  return (
    <div className="app-container">
      <img
        src={AUTH_BG_IMG}
        alt="main-background-img"
        className="auth-bg-img"
      />

      <div className="left-sub-container"></div>

      <div className="right-sub-container">
        <div className="form-bg-card">
          <div className="page-container">
            <div className="caset-img-wrap">
              <img src={CASET} alt="caset-img" className="caset-img" />
            </div>
            <Link style={{ display: "contents" }} to={"/"}>
              <img src={LOGO} alt="logo" className="auth-logo" />
            </Link>
            {/* Routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
