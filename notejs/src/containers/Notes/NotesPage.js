import React, { Fragment } from "react";
import withNotes from "./withNotes";

import { Error, NewNote, NoteList } from "../../components";

const NotesPage = ({
  notes,
  reloadHasError,
  onRetry,
  onAddNote,
  onDelete,
  onMove,
  onEdit
}) => {
  if (reloadHasError) {
    return <Error onRetry={onRetry} />;
  }

  return (
    <Fragment>
      <NewNote onAddNote={onAddNote} />
      <NoteList
        notes={notes}
        onMove={onMove}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </Fragment>
  );
};

export default withNotes(NotesPage);
