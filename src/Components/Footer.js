import React from "react";

export default function footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <img src="./img/Asset 3@2x 1.png" alt="" />
          </div>
          <div className="col pad">
            <h3>Support</h3>
            <p>FAQ</p>
            <p>Discord</p>
            <p>Tokenomics</p>
            <p>Audits</p>
          </div>
          <div className="col pad">
            <h3>Engage</h3>
            <p>Governance</p>
            <p>Partner Application</p>
            <p>Bug Bounty</p>
            <p>Developer Grants</p>
          </div>
          <div className="col">
            <h3>Learn</h3>
            <p>Docs</p>
            <p>Arbor Labs</p>
            <p>Community</p>
            <p>Github</p>
          </div>
        </div>
        <p className="copyright">Copyright © 2022. All rights Reserved,</p>
      </footer>
    </div>
  );
}
