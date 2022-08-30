import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg  container">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="./img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Exchange
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Liquidity
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Analytics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    IDO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    More
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search"></form>
              <div className="cont">
                <p className="img">
                  <img src="./img/subtract.png" alt="" />
                </p>
                <p className="para">BNB</p>
              </div>
              <div className="cont">
                <p className="para sec1">Connect</p>
                <p className="img_bor">
                  <img src="./img/Polynation_Final-01 2.png" alt="" />
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="bdimg"></div>
      </div>
    </>
  );
}
