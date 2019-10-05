import React from "react";

import { AppBar, NavigationDrawer, Container } from "../../components";

import withNotes from "../Notes/withNotes";
class PageLayout extends React.Component {
  state = {
    isMenuOpen: false
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const {
      children,
      isLoading,
      savedHasError,
      onSaveRetry,
      menu
    } = this.props;

    const { isMenuOpen } = this.state;

    return (
      <div>
        <AppBar
          isLoading={isLoading}
          savedHasError={savedHasError}
          onSaveRetry={onSaveRetry}
          onOpenMenu={this.handleOpenMenu}
        />
        <Container>{children}</Container>
        <NavigationDrawer
          menu={menu}
          isOpen={isMenuOpen}
          onCloseMenu={this.handleCloseMenu}
        />
      </div>
    );
  }
}

export default withNotes(PageLayout);
