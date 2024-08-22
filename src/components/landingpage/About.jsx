import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/about.png"
              className="img-responsive"
              alt="logo de la empresa"
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Acerca de nosotros</h2>
              <p>
                Somos una empresa dedicada al idesarrollo de herramientas para
                ayudar a cumplir tus metas personales{" "}
              </p>
              <h3>Vision</h3>
              <div className="list-style">
                <p>
                  Para 2026, Study Sphere será una herramienta de uso común
                  entre los estudiantes de varias partes del mundo que los
                  impulse a explotar todo su potencial al facilitar la forma en
                  la que se organizan a sí mismos bajo un marco de actuación
                  ético y honesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
