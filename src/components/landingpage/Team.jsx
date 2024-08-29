import React from "react";
import fotoBrayan from "./imgTeam/fotoBrayan.png";
import fotoSergio from "./imgTeam/fotoSergio.png";
import fotoAnderson from "./imgTeam/fotoAnderson.png";

export const Team = () => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>El equipo de desarrollo</h2>
        </div>
        <div id="row">
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              <img
                src={fotoBrayan}
                alt="Brayan Rodríguez"
                className="team-img"
              />
              <div className="caption">
                <h4>Brayan Camilo Rodríguez</h4>
                <p>Desarrollador Full Stack</p>
                <a href="https://www.linkedin.com/in/brayan-camilo-rodriguez-diaz-722757225/">
                  <i className="fa fa-linkedin"></i>
                </a>{" "}
                <a href="https://github.com/brrodriguezd">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 team">
          <div className="thumbnail">
            <img src={fotoAnderson} alt="Anderson" className="team-img" />
            <div className="caption">
              <h4>Anderson</h4>
              <p>Desarrollador Frontend</p>
              <a href="www.linkedin.com/in/anderson-david-morales-chila-58b920182">
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a href="https://github.com/AndersonMorales08">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 team">
          <div className="thumbnail">
            <img src={fotoSergio} alt="Sergio" className="team-img" />
            <div className="caption">
              <h4>Sergio</h4>
              <p>Desarrollador Backend y Base de datos</p>
              <a href="https://www.linkedin.com/in/sergio-ivan-motta-doncel-162a3622a/">
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a href="https://github.com/smottad/">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
