import { Link } from "react-router-dom";

export default function Cabecalho() {

    return(
        <>
            <header className="cabecalho">
                <h1>Vite + React</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/produtos">PRODUTOS</Link></li>
                    <li><Link to="/produtos/editar/1">PRODUTO 1</Link></li>
                    <li><Link to="/produtos/editar/2">PRODUTO 2</Link></li>
                    <li><Link to="/produtos/editar/3">PRODUTO 3</Link></li>
                </ul>
            </header>
        </>
    )

}