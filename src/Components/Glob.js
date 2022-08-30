import React from "react";

export default function Glob() {
  return (
    <div>
      <section className="glob">
        {/* <div className="cir_glob"> */}
        {/* <img src="./img/home_photo 1.png" alt="" /> */}
        {/* </div> */}
        <div className="glob_img">
          <h2>Our Values</h2>

          <div className="card text-center">
            <div className="glob_inner_img">
              <img src="./img/home_photo 1.png" alt="" className="" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Accessibility</h4>
              <p className="card-text text-secondary">
                We create tools for users to leverage DeFi opportunities,
                regardless of location, background, wealth, or experience.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="glob_inner_img">
              <img src="./img/Mask group.png" alt="" className="" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Transparency</h4>
              <p className="card-text text-secondary">
                We build together through transparent governance and processes
                that ensure our community understands our goals.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="glob_inner_img">
              <img src="./img/Vec.png" alt="" className="small_img" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Security</h4>
              <p className="card-text text-secondary">
                We ensure that the safety of the funds of our users and partners
                is our highest priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
