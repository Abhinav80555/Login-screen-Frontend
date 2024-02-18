import "./App.css";
import { AUTH_BG_IMG, CASET, LOGO } from "./helpher/helpher";
import { Link, Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/LoginForm";
import LoggedSucces from "./pages/LoggedSucces";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";

function App() {
  // ----------------State to manage user login status-----------------
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {/* ----------------------Main container for the application ---------------------*/}
      <div className="app-container">
        <img
          src={AUTH_BG_IMG}
          alt="main-background-img"
          className="auth-bg-img"
        />

        <div className="left-sub-container"></div>
        <div className="right-sub-container">
          {/* ----------------------Form background card commonly placed ---------------------*/}
          <div className="form-container-card">
            <div className="page-container">
              <div className="mobile-caset-container">
                <img src={CASET} alt="caset-img" className="caset-img" />
              </div>
              <Link style={{ display: "contents" }} to={"/"}>
                <img src={LOGO} alt="logo" className="auth-logo" />
              </Link>

              {/* ----------------------Routes---------------------*/}
              <Routes>
                <Route
                  path="/"
                  element={<LoginForm setIslogged={setIsLogged} />}
                />
                {isLogged && (
                  <Route path="/logged" element={<LoggedSucces />} />
                )}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
