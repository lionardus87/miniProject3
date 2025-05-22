import "./App.css";

import { AuthProvider } from "./contex/AuthenticationContex/AuthContext";
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
