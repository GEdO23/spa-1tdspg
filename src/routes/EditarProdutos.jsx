import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  const navigate = useNavigate();

  //Recuperando o id do produto com o HOOK useParam();
  const {id} = useParams();

    //Utilizando o filter na Lista de Produtos para recuperar um produto através do id como parâmetro.
    const prodRecuperadoPorId = ListaProdutos.filter( produto => produto.id == id);

    const [produto,setProduto] = useState({
      id: prodRecuperadoPorId[0].id,
      nome: prodRecuperadoPorId[0].nome,
      preco: prodRecuperadoPorId[0].preco,
      desc: prodRecuperadoPorId[0].desc,
      img: prodRecuperadoPorId[0].img
    });

    const handleChange = (event) => {
        // Destructuring
        const {name,value} = event.target;
        // Inserir os dados no objeto produto através do setProduto({...});
        setProduto({...produto,[name]:value});
    }

    const HandleSubmit = (event) => {
        event.preventDefault();

        // Índice que será utilizado para a sobreposição do produto na lista
        let indice;

        // Localização do índice na lista
        ListaProdutos.forEach((item,index) => {
          if(item.id == produto.id) {
            indice = index;
          }
        });

        // Utilizando o método splice para alterar o produto no índice especificado
        ListaProdutos.splice(indice,1,produto);
        alert("Produto alterado com sucesso!");

        navigate("/produtos");

    }

  return (
    <>
        <div>
            <h1>EDITAR-PRODUTOS</h1>
            <form onSubmit={HandleSubmit}>
              <fieldset>
                <legend>EDITAR PRODUTO</legend>
                <div>
                  <label htmlFor="idProduto">Nome Produto:</label>
                  <input type="text" name="nome" id="idProduto" value={produto.nome} onChange={handleChange} contentEditable="false"/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço Produto:</label>
                  <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange} contentEditable="false"/>
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição Produto:</label>
                  <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} contentEditable="false"/>
                </div>
                <div>
                  <button >EDITAR</button>
                </div>
              </fieldset>
            </form>
        </div>

        {/* <div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
          <p>Descrição: {produto.desc}</p>
        </div> */}
    </>
  )
}