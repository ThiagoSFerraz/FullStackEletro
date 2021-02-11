import Produto from "../components/produto";
import { useState, useEffect, lazy, Suspense } from "react";
import "../components/produto/produto.css";

const Lista = lazy (() => import('../components/produto/lista'))

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(async () => {
    const resposta = await fetch("http://localhost:4000/produtos");
    const dados = await resposta.json();
    setProdutos(dados);
  }, []);

  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-12 my-3">
            <Suspense fallback={<h3 className="text-white text-center">Carregando categorias...</h3>}>
              <Lista />
            </Suspense>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row justify-content-center">
              {produtos &&
                produtos.map((item) => (
                  <Produto
                    imagem={item.imagem}
                    descricao={item.Descricao}
                    preco={item.preco}
                    categoria={item.categoria}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
