import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main"; // ✅ Importação corrigida

function App() {
  return (
    <Router>
      {" "}
      {/* Envolvendo toda a aplicação com Router */}
      <Header />
      <Main />
    </Router>
  );
}

export default App;
