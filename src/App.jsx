import { useState } from "react";
import { AuthRoutes } from "./routes/AuthRoutes";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <AuthRoutes setIsLogged={setIsLogged} isLogged={isLogged} />
    </>
  );
}

export default App;

