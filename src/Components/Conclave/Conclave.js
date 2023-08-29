import React, { useState, useEffect } from "react";
import "./Conclave.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Main";
import Speakers from "./Speakers";

const Conclave = () => {
  return (
    <>
      <section className="nav-home">
        <span>Conclave...</span>
      </section>
      <Main />
      <Speakers />
    </>
  );
};

export default Conclave;
