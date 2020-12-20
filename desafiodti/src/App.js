import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // ,Link
} from "react-router-dom";
import FormularioCadastro from "./components/FormularioCadastro";
import Tabela from "./components/Tabela/Tabela";
import "./assets/App.css";
import './assets/index.css';

export default function App() {
  return (
    <Router>
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
      />
        <Switch>
          <Route path="/cadastro">
            <FormularioCadastro />
          </Route>
          <Route path="/">
            <Tabela />
          </Route>
        </Switch>
    </Router>
  );
}
