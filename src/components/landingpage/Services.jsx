import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>Las características principales del negocio</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            {" "}
            <i className={"fa fa-calendar"}></i>
            <div className="service-desc">
              <h3>Calendario</h3>
              <p> Lleva todos tus compromisos con nuestro calendario </p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <i className={"fa fa-mortar-board"}></i>
            <div className="service-desc">
              <h3>FlashCards</h3>
              <p> Aprende a tu paso con tus propias flashcards </p>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <i className={"fa fa-cloud-upload"}></i>
            <div className="service-desc">
              <h3> Guarda tu información </h3>
              <p>
                {" "}
                Manten todos tus datos sin importar el dispositivo con tu cuenta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
