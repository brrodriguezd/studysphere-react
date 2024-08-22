import "./Success.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import support from "./img/support.png";
import axios from "axios";

const Success = () => {
  const [successfulUpdate, setSuccessfulUpdate] = useState(true);
  // FOR TESTING
  //const [successfulUpdate, setSuccessfulUpdate] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .post("https://studysphere-react.onrender.com/update_user", {
        userId: searchParams.get("userId"),
      })
      .then((_res) => {
        setSuccessfulUpdate(true);
      })
      .catch((e) => console.log(e));
  });
  //si no ha cargado espera
  if (!successfulUpdate) {
    return (
      <div className="contenedor">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div className="contenedor">
      <h1>Pago Exitoso</h1>
      <h3>Cierra esta pestaña y recarga la pagina para continuar.</h3>
      <img src={support} alt="Gracias por tu apoyo"></img>
    </div>
  );
};

export default Success;
