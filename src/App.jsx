import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import style from "./App.module.css";

export default function App() {

  return (
    
    <div className={style.container}>
        <Cabecalho/>
        <Outlet/>
        <Rodape/>
    </div>
    
  )

}