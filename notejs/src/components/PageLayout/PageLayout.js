import React from "react";

import AppBar from "../AppBar/AppBar";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

import "./page-layout.scss";

const PageLayout = ({
  children,
  isLoading,
  savedHasError,
  onSaveRetry,
  onOpenMenu,
  isMenuOpen,
  onCloseMenu,
  menu
}) => (
  <div>
    <AppBar
      isLoading={isLoading}
      savedHasError={savedHasError}
      onSaveRetry={onSaveRetry}
      onOpenMenu={onOpenMenu}
    />
    <div className = "container">{children}</div>
    <NavigationDrawer menu={menu} isOpen={isMenuOpen} onCloseMenu={onCloseMenu}/>
  </div>
);

export default PageLayout;
