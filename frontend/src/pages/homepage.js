import '../components/homepage/style.css'



export default function Home(){
    return(
        
            <div className="container-fluid fundo text-white">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 mt-5 mb-4"><h1>Seja bem-vindo!</h1></div>
                    <div className="col-lg-10"><h4>Aqui programadores pagam menos!</h4></div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-4 col-md-8 col-sm-12 mt-5">
                    <a href="/produtos">
                        <button className="btn w-100 btn-danger rounded-pill">Veja nossas ofertas</button>    
                    </a>
                    </div>                    
                </div>
                <hr/>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 mt-4">
                        <p>Tecnologias usadas no site</p>
                    </div>
                    <div className="col-lg-12">
                        <img className="tecWeb1 mt-lg-5" src={require('../components/homepage/img/atom.png').default}/>
                        <img className="tecWeb mx-lg-5 mt-lg-5" src={require('../components/homepage/img/nodejs-icon.png').default}/>
                        <img className="tecWeb mt-lg-5" src={require('../components/homepage/img/mongo.png').default}/>
                    </div>     
                </div>
                                   
                
            </div>


        // <div className="bg-dark">
        // <div className="homepg jumbotron bg-dark text-center font-weight-bold rounded-0">
        //     <h1 className="display-1 text-white">Seja bem vindo!</h1>
        //     <p className="lead text-white">Aqui em nossa loja, <em class="font-weight-bold">programadores tem desconto</em> nos produtos para sua casa!</p>
        //     <hr/>
        //     <p className="text-white">Venha conhecer nossos produtos!</p>
        //     <a className="btn btn-danger col-6 btn-lg" href="/produtos" role="button">Nossos Produtos!</a>
        // </div>
        // <div className="cartao jumbotron bg-dark text-center font-weight-bold rounded-0">
        //     <h1 className="display-3 text-white">Aceitamos as principais bandeiras!</h1>
        //     <img src={require(`../components/homepage/cartaocred.png`).default} className="w-25" alt="Bandeiras de cartão" />
        // </div>
            
        
        // </div>
    )
}