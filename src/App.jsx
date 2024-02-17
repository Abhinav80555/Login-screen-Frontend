import "./App.css";
import { AUTH_BG_IMG } from "./helpher/helpher";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/LoginForm";
import LoggedSucces from "./pages/LoggedSucces";

function App() {
  return (
    <>
      <div className="app-container">
        <img src={AUTH_BG_IMG} alt="" className="auth-bg-img" />

        <div className="left-sub-container"></div>
        <div className="right-sub-container">
          <div className="form-container-card">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/logged" element={<LoggedSucces />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
