import React from 'react';
import GridStyles, { GridStyleProps } from './Grid.styles';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  styledProps: GridStyleProps;
  keys: number;
};

function Grid({ keys, styledProps, ...intrinsic }: GridProps) {

  const renderCells = (keys: number, beats: number, quantize: number) => {
    console.log(keys);
    const subbeats = ['', 'e', '&', 'a'];
    const cells: React.ReactNode[] = [];
    for (let thisKey = 0; thisKey < keys; thisKey++) {
      console.log(thisKey);
      for (let beat = 0; beat < beats; beat++) {
        // for (let subbeat = 0; subbeat < quantize; subbeat++) {
        for (const subbeat of subbeats) {
          const classNames: string[] = [];
          classNames.push((beat % 2 === 0) ? 'beat-even' : 'beat-odd');
          classNames.push(`subbeat-${subbeat}`)
          cells.push(<span key={`${thisKey}-${beat}-${subbeat}`} className={classNames.join(' ')}>{beat}</span>);
        }
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
