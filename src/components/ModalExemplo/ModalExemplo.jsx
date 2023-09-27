import { useState } from "react";
import style from "./ModalExemplo.module.css"

export default function ModalExemplo(props){

    document.title = "CADASTRO";

    let novoId;

    fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {
            "Content-Temp": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        novoId = (data[data.length-1].id + 1);
    })
    .catch((error) => {
        console.log(error)
    })

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        preco: "",
        desc: "",
        img: "https://picsum.photos/200/300"
    });
    
    const handleChange = (e) => {
        e.preventDefault();
        
        const {name, value} = e.target;

        // if(name == "nome") {
        //     setProduto({"nome": value});
        // } else if (name == "preco") {
        //     setProduto({"preco": value});
        // } else if (name == "desc") {
        //     setProduto({"desc": value});
        // }

        setProduto({...produto, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        .then((response)=> {
            console.log(`Status da requisitação HTTP : ${response.status}`);
            return response.json();
        })
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error));
        props.setOpen(false);

    }

    if(props.open){
        return(
            <div className={style.container}>
                <h1>Cadastrar Produto</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>EDITAR PRODUTO</legend>
                            <div>
                                <label htmlFor="idProduto">Nome Produto:</label>
                                <input 
                                type="text" 
                                name="nome" 
                                id="idProduto" 
                                value={produto.nome} 
                                onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço Produto:</label>
                                <input 
                                type="text" 
                                name="preco" 
                                id="idPreco" 
                                value={produto.preco}
                                onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição Produto:</label>
                                <input 
                                type="text" 
                                name="desc" 
                                id="idDesc" 
                                value={produto.desc} 
                                onChange={handleChange} 
                                />
                            </div>

                            <div>
                                <button className="btn">CADASTRO</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}