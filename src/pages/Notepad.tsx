import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ConeImage from '../assets/cone.png';
import AddNote from '../components/AddNote';
import { Note } from '../components/Note';

export interface NoteProps {
  id: string;
  text: string;
  date: string;
}

export const Notepad = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data') || '{}'
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: NoteProps = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleString()
    };
    setNotes([newNote, ...notes]);
    toast.success('Saved');
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter((note: NoteProps) => note.id !== id));
    toast.error('Deleted');
  };

  return (
    <div className="w-full">
      <AddNote addNote={addNote} />
      {notes.map((note: NoteProps) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          removeNote={removeNote}
        />
      ))}
      <div className="flex justify-evenly ">
        <img src={ConeImage} width={'64'} />
        <img src={ConeImage} width={'64'} />
        <img src={ConeImage} width={'64'} />
      </div>
    </div>
  );
};
