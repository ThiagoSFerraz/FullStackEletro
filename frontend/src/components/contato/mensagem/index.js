import React, { useState, useEffect } from "react";
import '../style.css'


export default function Mensagem() {
  const [messages, setMessages] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState({
    formSave: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    nome: "",
    msg: "",
  });

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:4000/mensagem");
      setMessages(await response.json());
    }
    fetchMyAPI();
  }, [render]);

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/mensagem", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json",'Accept': 'application/json' },
      }).then((dados) => {
          setRender(!render);
          setFormData({
            nome: "",
            msg: "",
          });
        });

      const resEnv = await res.json();

      if (resEnv.error) {
        setMsg({
          formSave: false,
          type: "error",
          message: resEnv.message,
        });
      } else {
        setMsg({
          formSave: false,
          type: "success",
          message: resEnv.message,
        });
      }
    }catch(err){
      setMsg({
        formSave: false,
        type: "error",
        message: "Erro: mensagem não cadastrada, o sistema caiu! XD",
      });
    }

    setTimeout(() => {
      setMsg(false);
    }, 1000);
  };

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const day = myDate.getDay();
    const month = myDate.getMonth() + 1;
    const year = myDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="section d-flex justify-content-center my-5  row">
        <div className="text-white col-lg-10 text-center col-md-10 col-sm-12  border border-danger rounded">
        
        <h4 className = "text-center mt-4"> Mande uma mensagem para gente! </h4>
          <form onSubmit={sendForm} name="form">
            <div className="form-group">
              <input value={formData.nome} onChange={onChangeInput} type="text" className="form-control text-white bg-dark border rounded-pill border-danger my-4" id="nome" name="nome" placeholder="Digite seu Nome:"/>
              <input value={formData.msg} onChange={onChangeInput} type="text" className="form-control text-white bg-dark border rounded-pill border-danger my-4" id="msg" name="msg" placeholder="digite sua Mensagem:"/>
              <input type="submit" name="submit" className="btn-lg w-75 mb-4 border rounded-pill border-danger btn-danger" value="Enviar"/>
              {msg.type === "success" ? (
                <div className="alert alert-info position-absolute mx-auto mt-4 text-center" role="alert">
                  <span className="text-white">{msg.message}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 text-white my-5 text-center">
            <h1>Últimas mensagens:</h1>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-21 text-white">
          
          {messages.map((row) => (
            <div key={messages.id}>
              <div className=" border border-danger rounded my-3 py-3 px-3  w-100">
                <p>{formatDate(row.data)} -- <b className="">{row.nome}:</b></p>
                <p className="rounded borda px-3 py-3 w-100">{row.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}