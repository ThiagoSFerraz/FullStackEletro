import "../components/homepage/style.css";
import { lazy, Suspense } from "react";
import React, { Component } from "react";
import Tecnologias from "../components/homepage/";

export default function Home() {
  return (
    <div className="container-fluid fundo text-white">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mt-5 mb-4">
          <h1>Seja bem-vindo!</h1>
        </div>
        <div className="col-lg-10">
          <h4>Aqui programadores pagam menos!</h4>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 col-md-8 col-sm-12 mt-5">
          <a href="/produtos">
            <button className="btn w-100 btn-danger rounded-pill">
              Veja nossas ofertas
            </button>
          </a>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center text-center">
        <div className="col-lg-10 mt-4">
          <p>Tecnologias usadas no site</p>
        </div>

        <Tecnologias />
      </div>
    </div>
  );
}
