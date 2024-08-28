import React from "react";
export const Manuales = () => {
  return (
    <div>
      <div id="manuales" className="text-center">
        <div className="container">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Manuales</h2>
              <div className="col-md-7">
                <a
                  href="https://drive.google.com/file/d/1JZf8UOkUWtoTgbRaeDnAcJ8bQWzsYOSp/view?usp=sharing"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Manual de usuario
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://drive.google.com/file/d/12JwOXVv5saFI6Ijuiy4GqJ6DANhgHbZz/view?usp=sharing"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Manual técnico
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
