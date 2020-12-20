const listarProdutos = () => {
    return fetch("http:localhost:4000/produtos", {
      method: "GET"
    })
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        return json;
      });
  };
  
  const cadastrarProduto = (nome, cpf) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    });
  
    return fetch("http:localhost:4000/produtos/produto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    }).then(resp => {
      
        return resp.body;
      } 
    );
  }
  
  const deletaProduto = id => {
    return fetch(`http://localhost:4000/produtos/produto/${id}`,{
      method: 'DELETE'
    });
  }
  
  const detalhaProduto = id => {
    return fetch(`http://localhost:4000/produtos/produto/${id}`,{
      method: 'GET'
    }).then(resposta => {
      return resposta.json();
    })
  }
  
  const editaProduto = (id, cpf, nome) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    });
  
    return fetch(`http:localhost:4000/produtos/produto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    }).then(resp => {
      
        return resp.body;
      } 
    );
  }