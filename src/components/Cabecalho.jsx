import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css"

export default function Cabecalho(){

    return(
        <>
            <header className={styles.cabecalho}>
                <h1>MINI</h1>
                <h2>LOJA</h2>
                <ul>
                    <li><Link to="/" className={styles.lonk}>HOME</Link></li>
                    <li><Link to="/produtos" className={styles.lonk}>PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}