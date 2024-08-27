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
                  Para 2028, Study Sphere será una herramienta de uso común en
                  el estudio autónomo y el manejo de asignaturas y proyectos,
                  que permita a los usuarios, con su esfuerzo y honestidad hacía
                  sí mismos, alcanzar sus metas académicas y/o personales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
