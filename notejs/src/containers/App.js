import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuid from "uuid/v1";

import AppBar from "../components/AppBar";
import NavigationDrawer from "../components/NavigationDrawer";
import NoteService from "../services/NoteService";

import Notes from "./Notes";
import About from "./About";

class App extends React.Component {
  state = {
    notes: [],
    isLoading: false,
    reloadHasError: false,
    savedHasError: false,
    isMenuOpen: false
  };

  componentDidCatch() {
    this.setState({ reloadHasError: true });
  }

  componentDidMount() {
    this.handleReload();
  }

  handleAddNote = text => {
    this.setState(prevState => {
      const notes = prevState.notes.concat({id: uuid(), text: text });

      this.handleSave(notes);

      return { notes };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);
      newNotes.splice(index, 1);

      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleEdit = (id, text) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);
      newNotes[index].text = text;

      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleMove = (direction, index) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const removedNote = newNotes.splice(index, 1)[0];

      if (direction === "up") {
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }

      this.handleSave(newNotes);

      return {
        notes: newNotes
      };
    });
  };

  handleReload = () => {
    this.setState({ isLoading: true, reloadHasError: false });
    NoteService.load().then(notes => {
        this.setState({ notes, isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false, reloadHasError: true });
    });
  }

  handleSave = notes => {
    this.setState({ isLoading: true, savedHasError: false });
    NoteService.save(notes).then(() => {
        this.setState({ isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false, savedHasError: true });
    });
  };

  handeOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  }

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  render() {
    const {
      notes,
      isLoading,
      isMenuOpen,
      reloadHasError,
      savedHasError
    } = this.state;

    return (
      <Router>
        <div>
          <AppBar isLoading={isLoading}
            savedHasError={savedHasError}
            onSaveRetry={()=> {
              this.handleSave(notes);
            }}
            onOpenMenu={this.handeOpenMenu}
            />
            <div className = "container">
              <React.Fragment>
                <Route
                  path="/"
                  exact
                  render={props => (
                    <Notes
                      notes={notes}
                      reloadHasError={reloadHasError}
                      onRetry={this.handleReload}
                      onAddNote={this.handleAddNote}
                      onMove={this.handleMove}
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                    />
                  )}
                />
                <Route path="/about" exact component={About} />
              </React.Fragment>
              </div>
              <NavigationDrawer
              isOpen={isMenuOpen}
              onCloseMenu={this.handleCloseMenu}/>
        </div>
      </Router>
    );
  }
}

export default App;
