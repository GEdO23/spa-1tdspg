import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function ExcluirProduto() {
  document.title = "Excluir Produto";

  const { id } = useParams();

  const navigate = useNavigate()

  const produtoObj = ListaProdutos.filter((item) => item.id == id)[0];

  const [produto] = useState(produtoObj);

  const handleDelete = () => {
    //Índice que será utilizado para a exclusãoo do produto na lista.
    let indice;

    //Localização do índice na lista.
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });

    //Excluindo o produto da lista com splice();
    ListaProdutos.splice(indice,1);
    alert("O produto foi excluído com Sucesso!");
    //Redirecionando o usuário para a lista de produtos:
    navigate("/produtos");
  };

  return (
    <>
      <h1>Excluir Produto</h1>
      <div>
        <h2>{`Deseja realmente excluir o produto ${produto.nome}?`}</h2>
        <div>
          <button onClick={handleDelete}>EXCLUIR</button>
          <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </>
  );
}