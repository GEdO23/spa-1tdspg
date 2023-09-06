import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import "./Produtos.css";

export default function Produtos() {

    const estiloImg = {
        width: "100px",
        height: "100px",
    }

  return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            <table className="tabelaProd">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>DESCRIÇÃO</th>
                    <th>PREÇO</th>
                    <th>IMG</th>
                    <th><Editar/> / <Excluir/></th>

                </tr>
            
                {ListaProdutos.map( (produto, indice)=>(
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                            <td><img style={estiloImg} src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                            <td> <Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link> </td>
                        </tr>
                ))}
            </table>

        </div>
    </>
  )
}