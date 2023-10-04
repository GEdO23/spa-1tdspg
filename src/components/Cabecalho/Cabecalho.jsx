import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho(){

    const rotaAtual = useLocation();

    return(
        <>
            <header className="cabecalho">
                <h1>MINI</h1>
                <h2>LOJA</h2>
                <ul>
                    <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : "lonk"}>HOME</Link></li>
                    <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : "lonk"}>PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}