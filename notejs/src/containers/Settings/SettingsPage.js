import React from "react";

import { Header } from "../../components";

const SettingsPage = () => (
  <div>
    <Header>Temas</Header>
    <div className="themes">
      <div className="themes__item">
        <p>Padrão</p>
      </div>
      <div className="themes__item">
        <p>Clássico</p>
      </div>
    </div>
  </div>
);

export default SettingsPage;
