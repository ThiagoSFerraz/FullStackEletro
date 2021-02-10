import ListaLoja from '../components/lojas'
import '../components/lojas/lojas.css'


export default function Lojas() {
    return (
    <div className="fundo">
        <div className="container-fluid bg-dark">
            <div className="row justify-content-center text-center  text-white">
                <div className="col-12 mt-5">
                    <h1>Essas são nossas localizações!</h1>
                </div>
            </div>
            <ListaLoja/>
        </div>
    </div>
    )
}
