import "./CardCompra.css";
import React from "react";
import axios from "axios";
import support from "./img/support.png";
import noads from "./img/noads.png";
import logo from "./img/logo.png";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CardCompra = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    initMercadoPago("TEST-74c3107d-f2a4-4f11-8cac-fec600284f9f", {
      locale: "es - CO",
    });
  }, []);
  const [preferenceId, setPreferenceId] = useState(null);
  //para el id del usuario

  const crearPreferencia = async () => {
    try {
      const response = await axios.post(
        "https://studysphere-react.onrender.com/create_preference",
        {
          title: "Study Sphere Premium",
          quantity: 1,
          price: 10000,
          userId: searchParams.get("userId"),
        }
      );
      const { id } = response.data;
      return id;
    } catch (e) {
      console.log(e);
    }
  };
  const compra = async () => {
    if (searchParams.size === 0) {
      console.log("Error");
      return;
    }
    const id = await crearPreferencia();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <div className="contenedor-compra">
      <div className="compra-premium">
        <img src={logo} alt="Logo StudySphere"></img>
        <h1>Compra premium</h1>
        <h2>$10.000 COP</h2>
        <div className="beneficios">
          <img src={noads} alt="No Ads" />
          <h5>Accede a una experiencia sin anunciós</h5>
        </div>
        <div className="beneficios">
          <img src={support} alt="Apóyanos" />
          <h5>Apoya el desarrollo de la aplicación</h5>
        </div>
        <p>Olvidate de los anuncios y disfruta de la aplicación al máximo</p>
        <button onClick={compra}> Cambiate a premium </button>
        {preferenceId && (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{
              texts: { valueProp: "smart_option" },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CardCompra;
