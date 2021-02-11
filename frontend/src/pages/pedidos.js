import { useState, useEffect, lazy, Suspense} from "react";
import { Container, Row, Col } from "react-bootstrap";
const Pedido = lazy(() => import("../components/pedidos"));


// PÁGINA COM CONSULTA JOIN

export default function Pedidopg() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(async () => {
    const resposta = await fetch("http://localhost:4000/pedidos");
    const dados = await resposta.json();
    setPedidos(dados);
  }, []);

  return (
    <div className="bg-dark container-fluid text-white">
      <div className="row justify-content-center text-center">
        <div className="col-10 mt-5">
          <h1>Últimos pedidos</h1>
        </div>
        <div className="col-10 mt-3">
          <h3>Aqui você pode ver os últimos pedidos do site</h3>
        </div>
        <a
          className="btn btn-danger rounded-pill my-5 col-6 btn-lg"
          href="/produtos"
          role="button"
        >
          Nossos Produtos!
        </a>
      </div>
      <hr />

      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          {pedidos &&
            pedidos.map((item) => (
                // Lazy Loading
              <Suspense
                fallback={
                  <h3 className="text-center text-white">
                    Carregando Pedido...
                  </h3>
                }>
                <Pedido
                  quantidade={item.quantidade}
                  nome_cliente={item.nome_cliente}
                  descricao={item.Descricao}
                  preco={item.preco}
                />
              </Suspense>
            ))}
        </Col>
      </Row>
    </div>
  );
}
