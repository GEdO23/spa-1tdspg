import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";


export default function ExcluirProduto() {

    document.title ="Excluir Produto";

    const {id} = useParams();

    const navigate = useNavigate();

    const prodRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

    const [produto, setProduto] = useState(prodRecuperadoPorId);

    const handleDelete = () => {
        // Índice que será utilizado para a sobreposição do produto na lista
        let indice;

        // Localização do índice na lista
        ListaProdutos.forEach((item,index) => {
          if(item.id == produto.id) {
            indice = index;
          }
        });

        // Excluindo o produto da lista com splice();
        ListaProdutos.splice(indice,1);

        alert("Produto excluido com sucesso!");

        // Redirecionando o usuário para a lista de produtos
        navigate("/produtos");

    }

  return (
    <>
      <h1>Excluir - Produto</h1>
      <div>
        <h2>{`Deseja realmente excluir o produto ${produto.nome}?`}</h2>
        <div>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={() => navigate("/produtos")}>Cancelar</button>
        </div>
      </div>
    </>
  )
}