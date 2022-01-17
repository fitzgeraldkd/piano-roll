import React from 'react';
import { Note } from '../../utils/types';
import KeyboardStyles from './Keyboard.styles';

interface KeyboardProps extends React.HTMLAttributes<HTMLDivElement> {
  keys: number;
  notes: Note[];
  startingNote: number;
  startingOctave: number;
}

function Keyboard({keys, notes, startingNote, startingOctave}: KeyboardProps) {

  const renderKeys = (keys: number) => {
    const keyElements = [];
    for (let thisKey = keys - 1; thisKey >= 0; thisKey --) {
      const thisNote = notes[(thisKey + startingNote) % 12];
      const classNames: string[] = [];
      classNames.push((thisNote.length === 1 ? 'key-natural' : 'key-accidental'))
      keyElements.push(
        <span key={thisKey} className={classNames.join(' ')}>
          {thisNote}{startingOctave - Math.floor((startingNote - thisKey) / 12)}
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
