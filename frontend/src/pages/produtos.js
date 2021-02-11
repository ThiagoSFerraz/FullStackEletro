import { useState, useEffect, lazy, Suspense, } from "react";
import React from 'react';
import Lista from '../components/produto/lista'


const Produto = lazy (() => import('../components/produto'))

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
            {/* Lista está sendo renderizada em SSR */}
              <Lista />
            
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row justify-content-center">
              {produtos &&
                produtos.map((item) => (
                  <Suspense fallback={<h3 className="text-white text-center">Carregando categorias...</h3>}>
                  <Produto
                    imagem={item.imagem}
                    descricao={item.Descricao}
                    preco={item.preco}
                    categoria={item.categoria}
                  />
                  </Suspense>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
