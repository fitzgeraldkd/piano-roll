import styled from 'styled-components';

export interface GridStyleProps {
  beats: number;
}

export default styled.div<GridStyleProps>`
  display: grid;
  grid-template-columns: ${props => 'auto '.repeat(props.beats * 4)};

  /* .beat-even {
    background-color: #ddd;
  }

  .beat-odd {
    background-color: #bbb;
  } */

  .cell {
    background-color: #ddd;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    cursor: pointer;

    &.subbeat- {
      border-left: 1px solid #888;
    }

    &.cell-accidental {
      filter: brightness(80%);
    }
  
    &.cell-active {
      background-color: lime;
    }
  }

`;
