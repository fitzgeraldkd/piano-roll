import React from 'react';
import { playNote } from '../../utils/audio';
import { Note, NoteObj } from '../../utils/types';
import KeyboardStyles from './Keyboard.styles';

interface KeyboardProps extends React.HTMLAttributes<HTMLDivElement> {
  keys: number;
  notes: Note[];
  startingNote: number;
  startingOctave: number;
  audioCtx?: AudioContext;
}

function Keyboard({keys, notes, startingNote, startingOctave, audioCtx}: KeyboardProps) {

  const renderKeys = (keys: number) => {
    const keyElements = [];
    for (let thisKey = keys - 1; thisKey >= 0; thisKey --) {
      const thisNote = notes[(thisKey + startingNote) % 12];
      const thisOctave = startingOctave - Math.floor((notes.length - startingNote - thisKey - 1) / 12);
      const classNames: string[] = ['key'];
      classNames.push((thisNote.length === 1 ? 'key-natural' : 'key-accidental'));
      const noteObj: NoteObj = {note: thisNote, octave: thisOctave};
      keyElements.push(
        <span key={thisKey} className={classNames.join(' ')} onClick={() => playNote(audioCtx, noteObj)}>
          {thisNote}{thisOctave}
        </span>
      );
    }
    return keyElements;
  };

  return (
    <KeyboardStyles>
      {renderKeys(keys)}
    </KeyboardStyles>
  );
}

export default Keyboard;
