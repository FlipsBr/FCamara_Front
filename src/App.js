import CriarFornecedor from "./pages/CriarFornecedor.jsx";

import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <CriarFornecedor />
      <Outlet />
    </div>
  );
}

export default App;
