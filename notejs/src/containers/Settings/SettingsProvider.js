import React from "react";

import SettingsContext from "./SettingsContext";

class SettingsProvider extends React.Component {
  state = { theme: {} };

  handleToggleTheme = theme => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;

    return (
      <SettingsContext.Provider
        value={{ theme, toggleTheme: this.handleToggleTheme }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
