import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css"

export default function Cabecalho(){

    return(
        <>
            <header className={styles.cabecalho}>
                <h1>LOJA</h1>
                <h2>DO ALE</h2>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/produtos">PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}