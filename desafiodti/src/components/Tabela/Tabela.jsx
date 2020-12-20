import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DadosTabela from "../DadosTabela/DadosTabela";
import "./estilos.css";
class Tabela extends Component {

    _editaProduto(){
        this.props.editaProduto(this.produto, this.quantidade, this.valor);
    }

    render() {
        return (
            <section className="tabela">
                <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                crossorigin="anonymous"
                />
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Produto</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.produtos.map((produto) => {
                            return (
                                <tr>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{produto.valor}</td>
                                    <button className="btn btn-danger"
                                    onClick={console.log('exclui')}>Excluir</button>
                                    <Link to="/cadastro">
                                        <button className="btn btn-primary"
                                        onClick={this._editaProduto.bind(this)}>Editar</button>
                                    </Link>
                                </tr>
                                
                            );
                        })}
                    </tbody>
                </table>
                <Link to="/cadastro">
                    <button className="botao-adicionar">
                    <span>Adicionar</span></button>
                </Link>
            </section>
            
        );
    }
}

export default Tabela;
