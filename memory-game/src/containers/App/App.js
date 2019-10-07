import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import Routes from "../Routes";

const App = () => (
  <>
    <CssBaseLine />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
