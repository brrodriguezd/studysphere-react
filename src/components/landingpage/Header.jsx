import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Study Sphere
                  <span></span>
                </h1>
                <p>Tu apoyo para todos tus proyectos</p>
                <a
                  rel="noopener noreferrer"
                  href="https://studysphere--five.vercel.app/"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Inicia gratuitamente
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
