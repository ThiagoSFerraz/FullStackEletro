import { lazy, Suspense } from "react";
import "../components/lojas/style.css";
import React from "react";

const ListaLoja = lazy(() => import("../components/lojas"));

export default function Lojas() {
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
      </div>
    </div>
  );
}
