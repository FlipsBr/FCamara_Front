import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ListarFornecedor from "./pages/ListarFornecedor.jsx";
import PesquisarFornecedor from "./pages/PesquisarFornecedor.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="fornecedores" element={<ListarFornecedor />} />
        <Route path="pesquisa" element={<PesquisarFornecedor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
