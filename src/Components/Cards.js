import React from "react";
import Sec_thid from "./Sec_thid";

export default function Cards() {
  return (
    <div className="cds">
      <p className="parag">Explore endless possibilities with PolyNation</p>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Sec_thid />
          </div>
          <div className="col-md-4">
            <Sec_thid />
          </div>
          <div className="col-md-4">
            <Sec_thid />
          </div>
        </div>
      </div>
    </div>
  );
}
