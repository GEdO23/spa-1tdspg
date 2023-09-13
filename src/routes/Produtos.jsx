import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";

export default function Produtos() {

  return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            <table className={classes.tabelaProd}>
                <tr>
                    <th className={classes.tabelaCabecalho}>ID</th>
                    <th className={classes.tabelaCabecalho}>NOME</th>
                    <th className={classes.tabelaCabecalho}>DESCRIÇÃO</th>
                    <th className={classes.tabelaCabecalho}>PREÇO</th>
                    <th className={classes.tabelaCabecalho}>IMG</th>
                    <th className={classes.tabelaCabecalho}><Editar/> / <Excluir/></th>

                </tr>
            
                {ListaProdutos.map( (produto, indice)=>(

<tr className={classes.tabelaLinha} key={indice}>

                            <td className={classes.tabelaDados}>{produto.id}</td>
                            <td className={classes.tabelaDados}>{produto.nome}</td>
                            <td className={classes.tabelaDados}>{produto.desc}</td>
                            <td className={classes.tabelaDados}>{produto.preco}</td>
                            <td className={classes.tabelaDados}><img className={classes.tblImg} src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                            <td className={classes.tabelaDados}> <Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link> </td>
                        </tr>
                ))}
            </table>

        </div>
    </>
  )
}