import './style.css'
import React from 'react'

export default function Tecnologias() {
  return (
    <div className="col-lg-12">
      <img
        className="tecWeb1 mt-lg-5"
        src={require("./img/atom.png").default}
      />
      <img
        className="tecWeb mx-lg-5 mt-lg-5"
        src={require("./img/nodejs-icon.png").default}
      />
      <img
        className="tecWeb mt-lg-5"
        src={require("./img/mongo.png").default}
      />
    </div>
  );
}
