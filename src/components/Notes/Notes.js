import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  console.log("props", props.notes[0]);
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.length === 0 ? (
        <div>
        <p>Notes you add appear here.</p>
        <p style={{ textAlign: 'center'}}> - </p>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Made by{' '}
        <span style={{ textDecoration: 'underline' }}>KM Leshike</span>
      </p>
        </div>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
