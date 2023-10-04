import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProduto() {
  document.title = "Adicionar Produto";

  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    preco: "",
    desc: "",
    img: "https://picsum.photos/200/300"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gera um novo ID baseado no maior ID existente na lista de produtos
    const novoId = Math.max(...ListaProdutos.map((produto) => produto.id)) + 1;

    const novoProduto = {
      ...produto,
      id: novoId.toString()
    };

    ListaProdutos.push(novoProduto);
    alert("Produto adicionado!");

    navigate("/produtos");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>ADICIONAR PRODUTO</legend>
          <div>
            <label htmlFor="idProduto">Nome Produto:</label>
            <input
              type="text"
              name="nome"
              id="idProduto"
              value={produto.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idPreco">Preço Produto:</label>
            <input
              type="text"
              name="preco"
              id="idPreco"
              value={produto.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={produto.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn">Adicionar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
