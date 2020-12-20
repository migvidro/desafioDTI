import React, { Component } from "react";
import "./estilos.css";
class DadosTabela extends Component {

  render() {
    return (
        <section class="table-row">
            <td>{this.props.produto.nome}</td>
            <td>{this.props.produto.quantidade}</td>
            <td>{this.props.produto.valor}</td>
        </section>
        
    );
  }
}

export default DadosTabela;
