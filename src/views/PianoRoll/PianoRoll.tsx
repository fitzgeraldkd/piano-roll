import React from 'react';
import Grid from '../../components/Grid/Grid';
import Keyboard from '../../components/Keyboard/Keyboard';
import { Note, SequencedNote } from '../../utils/types';
import PianoRollStyles from './PianoRoll.styles';

interface PianoRollProps extends React.HTMLAttributes<HTMLDivElement> {
  sequence: SequencedNote[];
}

function PianoRoll({ sequence, ...intrinsic }: PianoRollProps) {
  const notes: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const keys = 61;
  const startingNote = 3;
  const startingOctave = 2;

  return (
    <PianoRollStyles {...intrinsic}>
      <Keyboard keys={keys} notes={notes} startingNote={startingNote} startingOctave={startingOctave} />
      <Grid styledProps={{beats: 4}} keys={keys} notes={notes} startingNote={startingNote} startingOctave={startingOctave} sequence={sequence} />
    </PianoRollStyles>
  );
}

export default PianoRoll;
