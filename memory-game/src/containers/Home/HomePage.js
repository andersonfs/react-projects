import React from "react";

import { Dashboard, DashboardMenu, DashboardButton } from "../../components";

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title="Jogo da Memória">
      <DashboardButton>Iniciar Jogo</DashboardButton>
    </DashboardMenu>
  </Dashboard>
);

export default HomePage;
