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
        // console.log(event.target);

        //Destructuring
        const {name,value} = event.target;
        //Inserir os dado no objeto produto através do setProduto({...});
        setProduto({...produto,[name]:value});

    }

    const handleSubmit = (event)=>{
      
      event.preventDefault();

      //Índice que será utilizado para a sobreposição do produtos na lista.
      let indice;

      //Localização do índice na lista.
      ListaProdutos.forEach((item,index)=>{
        if(item.id == produto.id){
          indice = index;
        }       
      });

      //Utilizando o método splice para alterar o produto no índice especificado.
      ListaProdutos.splice(indice,1,produto);
      alert("Produto alterado!");

      navigate("/produtos")

    }


  return (
    <>
        <div className="container">

            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>EDITAR PRODUTO</legend>
                <div>
                  <label htmlFor="idProduto">Nome Produto:</label>
                  <input type="text" name="nome" id="idProduto" value={produto.nome} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="idPreco">Preço Produto:</label>
                  <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição Produto:</label>
                  <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} />
                </div>

                <div>
                  <button className="btn" >EDITAR</button>
                </div>
              </fieldset>
            </form>
        </div>
    </>
  )
}