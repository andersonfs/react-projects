import React, { Fragment } from "react";

import { Error, NewNote, NoteList } from "../../components";

const Notes = ({
  notes,
  reloadHasError,
  onRetry,
  onAddNote,
  onDelete,
  onMove,
  onEdit
}) => {
  if(reloadHasError) {
    return <Error onRetry={onRetry} />;
  }

  return (
    <Fragment>
      <NewNote onAddNote = {onAddNote}/>
      <NoteList
        notes={notes}
        onMove={onMove}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </Fragment>
  );
};

export default Notes;
