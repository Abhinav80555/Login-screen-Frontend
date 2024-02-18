import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/authLayout";
import { LoginForm } from "../pages/login";
import { LoginSuccess } from "../pages/loginSuccess";
import { PageNotFound } from "../pages/pageNotFound";

export function AuthRoutes({setIsLogged, isLogged}) {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<LoginForm setIsLogged={setIsLogged} />} />
        {isLogged && <Route path="/logged" element={<LoginSuccess />} />}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
