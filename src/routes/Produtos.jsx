import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalExemplo from "../components/ModalExemplo/ModalExemplo";

export default function Produtos() {
  document.title = "Produtos";

  useEffect(() => {
    console.log("useEffect que renderiza sempre!");
  });

  const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);

  useEffect(() => {
    setNovaListaProdutos(ListaProdutos);
    console.log("useEffect que renderiza apenas uma vez!");
  }, []);

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(!open) {
    
      // fetch() = API do Javascript para realizar requisições/requests, que utiliza como parâmetro uma URL ou URI.
      fetch("http://localhost:5000/produtos",{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setNovaListaProdutos(data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  }, [open]);

  const handleExcluir = (id) => {

    fetch(`http://localhost:5000/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response)=> console.log(response.status))
    .catch((error)=> console.log(error))

    window.location("produtos");

  };



  return (
    <>
      <div>

        <table className={classes.tabelaProd}>
          <thead className={classes.tabelaCabecalho}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>IMG</th>
              <th>
                <Editar /> / <Excluir />
              </th>
            </tr>
          </thead>
          <tbody className={classes.tabelaCorpo}>
            {novaListaProdutos.map((produto, indice) => (
              <tr key={indice}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.desc}</td>
                <td>{produto.preco}</td>
                <td>
                  <img
                    className={classes.tblImg}
                    src={`${produto.img}`}
                    alt={`${produto.desc}`}
                  />
                </td>
                <td>
                  {" "}
                  <Link to={`/editar/produto/${produto.id}`}>
                    <Editar className={classes.icon}/>
                  </Link>{" "}
                  /{" "}
                  <Link onClick={() => handleExcluir(produto.id)}>
                    <Excluir className={classes.icon}/>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className={classes.tabelaRodape}>
            <tr>
              <td colSpan="6">
                <p className="qtd">
                  QUANTIDADE DE PRODUTOS: {novaListaProdutos.length}

                </p>

                <Link to={`/adicionar/produto`} className="btn">
                  ADICIONAR NOVO PRODUTO
                </Link>

                { open ? <ModalExemplo open={open} setOpen={setOpen}/> : "" }
                <button onClick={() => setOpen(true)} className="btn">CADASTRAR NOVO PRODUTO</button>

              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}