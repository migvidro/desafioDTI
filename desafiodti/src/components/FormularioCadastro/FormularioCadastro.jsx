import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.produto = "";
    this.quantidade = 0;
    this.valor = 0.0;
  }

  _handleMudancaProduto(event){
    event.stopPropagation();
    this.produto = event.target.value;
  }

  _handleMudancaQuantidade(event){
    event.stopPropagation();
    this.quantidade = event.target.value;
  }

  _handleMudancaValor(event){
    event.stopPropagation();
    this.valor = event.target.value;
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarProduto(this.produto, this.quantidade, this.valor);
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}>
        <h1>Dados do Produto</h1>
        <label>Produto</label>
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          className="form-control"
          onChange={this._handleMudancaProduto.bind(this)}
        />
        <label>Quantidade</label>
        <input
          type="number"
          placeholder="Digite a quantidade..."
          className="form-control"
          onChange={this._handleMudancaQuantidade.bind(this)}
        />
        <label>Valor</label>
        <input
          type="number"
          placeholder="Digite o valor do produto..."
          className="form-control"
          onChange={this._handleMudancaValor.bind(this)}
        />
        <button className="botao-adicionar"
        onClick={console.log("oi")}>
          Adicionar Produto
        </button>
        <Link to="/">
          <button className="botao-voltar">
            Voltar
          </button>
        </Link>
        
      </form>
    );
  }
}

export default FormularioCadastro;
