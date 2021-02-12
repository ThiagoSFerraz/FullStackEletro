import { lazy, Suspense } from "react";
import "../components/contato/style.css";
import React from "react";
import Mensagem from "../components/contato/mensagem"

const ListaLoja = lazy(() => import("../components/contato"));

export default function Contato() {
  return (
    <div className="bg-dark fundo">
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center text-center  text-white">
          <div className="col-12 mt-5">
            <h1>Essas são nossas localizações!</h1>
          </div>
        </div>
        {/* Lazy Loading */}
        <Suspense
          fallback={<h2 className="text-white text-center">Carregando...</h2>}>
          <ListaLoja />
        </Suspense>
        
          <Mensagem />
        
      </div>
    </div>
  );
}
