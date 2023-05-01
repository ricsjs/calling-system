import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from './contexts/auth'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
