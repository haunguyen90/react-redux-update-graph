import React from "react";

import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="text-xs-center text-muted">
        Have questions or suggestions? Please file them on the
        {" "}<a
          href="https://github.com/haunguyen90/react-redux-update-graph/issues"
          target="_blank"
        >Github
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
