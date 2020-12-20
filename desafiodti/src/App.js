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

  let state = {
    produtos: [
      {
          nome: "Água",
          quantidade: 5,
          valor: 2
      },
      {
          nome: "Refrigerante",
          quantidade: 3,
          valor: 3.50
      },
      {
          nome: "Suco",
          quantidade: 10,
          valor: 5
      }
    ]
  }

  let criarProduto = (nome, quantidade, valor) => {
    const novoProduto = {nome, quantidade, valor};
    const novoArrayProdutos = [...state.produtos, novoProduto];
    const novoEstado = {
      notas: novoArrayProdutos
    }
    this.setState(novoEstado);
  }

  let editaProduto = function(nome, quantidade, valor){
    
  }

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
            <FormularioCadastro criarProduto={criarProduto.bind(this)}  editaProduto={editaProduto.bind(this)}/>
          </Route>
          <Route path="/">
            <Tabela produtos={state.produtos}/>
          </Route>
        </Switch>
    </Router>
  );
}
