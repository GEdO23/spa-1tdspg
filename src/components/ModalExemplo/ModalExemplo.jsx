import style from "./ModalExemplo.module.css"

export default function ModalExemplo(props){

    if(props.open){
        return(
            <div className={style.container}>
                <h1>ModalExemplo</h1>
                <button onClick={()=>props.setOpen(false)}>FECHA-MODAL</button>
            </div>
        )
    }
}