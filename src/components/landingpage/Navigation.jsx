import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Inicio
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Acerca de nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Nuestros servicios
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                El equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contáctanos
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll">
                FAQ
              </a>
            </li>
            <li>
              <a href="#manuales" className="page-scroll">
                Manuales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
