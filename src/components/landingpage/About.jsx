import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/about.png"
              //className="img-responsive"
              alt="logo de la empresa"
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Acerca de nosotros</h2>
              <p>Somos una compañia </p>
              <h3>Vision</h3>
              <div className="list-style">
                <p>Aqui nuestra vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
