import React from "react";

const AppBar = ({ isLoading, savedHasError, onSaveRetry }) => (
  <div className="app-bar">
    <div className="app-bar__container">
      <span className="app-bar__brand">Note.js</span>
      {isLoading && (
        <button className="app-bar__action app-bar__action--rotation">
          <i className="material-icons">refresh</i>
        </button>
      )}
      {savedHasError && (
        <button className="app-bar__action app-bar__action--danger" onClick={onSaveRetry}>
          <i className="material-icons">cloud_off</i>
        </button>
      )}
    </div>
  </div>
);

export default AppBar;
