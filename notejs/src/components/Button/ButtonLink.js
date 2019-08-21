import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

const ButtonLink = ({ children, to }) => (
  <div>
    <Link className="button" to={to}>
      {children}
    </Link>
  </div>
);

export default ButtonLink;
