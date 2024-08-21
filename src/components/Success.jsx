import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .post("http://localhost:3001/update_user", {
        userId: searchParams.get("userId"),
      })
      .then((_res) => {
        setSuccessfulUpdate(true);
      })
      .catch((e) => console.log(e));
  });
  //si no ha cargado espera
  if (!successfulUpdate) {
    return <div>cargando...</div>;
  }
  return (
    <div>
      <h1>Pago Exitoso</h1>
    </div>
  );
};

export default Success;
