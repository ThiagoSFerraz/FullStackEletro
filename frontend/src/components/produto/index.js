



export default function Produto(props) {
    return(
            
                <div className="border rounded border-danger mx-3 my-3 col-lg-3 col-md-5 col-sm-10 bg-dark text-center text-white">
                    <img src={require(`./img/${props.imagem}`).default} className="w-100 my-3 rounded" onclick="exibir_categoria"/>
                    <br />
                    <div className="font-weight-bold ">{props.descricao}</div>
                    <div className="text-white font-weight-bold col-12"> R$: {props.preco}</div>
                    <div className="bg-danger rounded-pill font-weight-bold col-12 btn my-3">Clique aqui para comprar! </div>
                </div>
            
        
   



    // <div className="boxProduto">
    //         <img src={require(`./img/fogao1.webp`).default} width="300px" alt="Imagem do produto"/>
    //         <figcaption>
    //             <p className="nome-prod">
    //                 {props.nome} teste
    //             </p>
    //             <p className="precofina-prod">
    //                 R$: {props.preco}
    //             </p>
    //         </figcaption>
    // </div>
    )
}