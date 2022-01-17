import React from 'react';
import { memoizeSequence } from '../../utils/helpers';
import { Note, SequencedNote } from '../../utils/types';
import GridStyles, { GridStyleProps } from './Grid.styles';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  styledProps: GridStyleProps;
  keys: number;
  notes: Note[];
  startingNote: number;
  startingOctave: number;
  sequence: SequencedNote[];
  handleAddToSequence: Function;
  handleRemoveFromSequence: Function;
};

function Grid({ keys, notes, startingNote, startingOctave, sequence, handleAddToSequence, handleRemoveFromSequence, styledProps, ...intrinsic }: GridProps) {

  const handleCellClick = (isSequenced: boolean, note: SequencedNote) => {
    if (isSequenced) {
      handleRemoveFromSequence(note);
    } else {
      handleAddToSequence(note);
    }
  }

  const renderCells = (keys: number, beats: number, quantize: number) => {
    const memoizedSequence = memoizeSequence(sequence);
    const subbeats = ['', 'e', '&', 'a'];
    const cells: React.ReactNode[] = [];
    for (let thisKey = keys - 1; thisKey >= 0; thisKey --) {
      const thisNote = notes[(thisKey + startingNote) % 12];
      const thisOctave = startingOctave - Math.floor((notes.length - startingNote - thisKey - 1) / 12);
      const inSequence = memoizedSequence[`${thisNote}${thisOctave}`] || [];
      for (let beat = 0; beat < beats; beat++) {
        subbeats.forEach((subbeat, index) => {
          const noteObj: SequencedNote = {
            note: thisNote,
            octave: thisOctave,
            start: beat + (index / 4)
          };
          const classNames: string[] = [];
          const isSequenced = inSequence.some(sequenced => sequenced.start === (beat + (index / 4)));
          classNames.push((beat % 2 === 0) ? 'beat-even' : 'beat-odd');
          classNames.push(`subbeat-${subbeat}`);
          classNames.push(isSequenced ? 'cell-active' : '');
          cells.push(<span key={`${thisKey}-${beat}-${subbeat}`} className={classNames.join(' ')} onClick={() => handleCellClick(isSequenced, noteObj)}>{beat}</span>);
        });
      }
    }
    return cells;
  };

  return (
    <GridStyles {...styledProps} {...intrinsic}>
      {renderCells(keys, 4, 16)}
    </GridStyles>
  );
}

export default Grid;
