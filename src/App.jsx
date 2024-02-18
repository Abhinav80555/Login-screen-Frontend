import "./App.css";
import { AUTH_BG_IMG, CASET, LOGO } from "./helpher/helpher";
import { Link, Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/LoginForm";
import LoggedSucces from "./pages/LoggedSucces";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={AUTH_BG_IMG} alt="" className="auth-bg-img" />

        <div className="left-sub-container"></div>
        <div className="right-sub-container">
          <div className="form-container-card">
            <div className="page-container">
              <div className="mobile-caset-container">
                <img src={CASET} alt="" className="caset-img" />
              </div>
              <Link style={{ display: "contents" }} to={"/"}>
                <img src={LOGO} alt="" className="auth-logo" />
              </Link>
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/logged" element={<LoggedSucces />} />
                <Route path="*" element={<PageNotFound/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
