import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";


export default function App() {
  
  // ÁREA DECLARATIVA
  let meuNome = "André";
  
  return (
  <>
    {/* ÁREA IMPERATIVA*/}
    <div className="container">

      <Cabecalho nomeDoUsuario={meuNome}>
        
      </Cabecalho>

      <Conteudo/>

      <Rodape/>
    
    </div>

  </>
  )


}
