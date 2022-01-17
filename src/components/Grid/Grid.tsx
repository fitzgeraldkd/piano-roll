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
};

function Grid({ keys, notes, startingNote, startingOctave, sequence, styledProps, ...intrinsic }: GridProps) {

  const renderCells = (keys: number, beats: number, quantize: number) => {
    const memoizedSequence = memoizeSequence(sequence);
    const subbeats = ['', 'e', '&', 'a'];
    const cells: React.ReactNode[] = [];
    // for (let thisKey = 0; thisKey < keys; thisKey++) {
    for (let thisKey = keys - 1; thisKey >= 0; thisKey --) {
      const thisNote = notes[(thisKey + startingNote) % 12];
      const thisOctave = startingOctave - Math.floor((notes.length - startingNote - thisKey - 1) / 12);
      for (let beat = 0; beat < beats; beat++) {
        // for (let subbeat = 0; subbeat < quantize; subbeat++) {
        // for (const subbeat of subbeats) {
        subbeats.forEach((subbeat, index) => {
          const inSequence = memoizedSequence[`${thisNote}${thisOctave}`] || [];
          console.log(memoizedSequence);
          console.log(inSequence);
          const classNames: string[] = [];
          classNames.push((beat % 2 === 0) ? 'beat-even' : 'beat-odd');
          classNames.push(`subbeat-${subbeat}`);
          classNames.push(inSequence.some(sequenced => sequenced.start === (beat + (index / 4))) ? 'cell-active' : '')
          cells.push(<span key={`${thisKey}-${beat}-${subbeat}`} className={classNames.join(' ')}>{beat}</span>);
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
