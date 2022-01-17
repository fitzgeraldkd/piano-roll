import styled from 'styled-components';

export interface GridStyleProps {
  beats: number;
}

export default styled.div<GridStyleProps>`
  display: grid;
  grid-template-columns: ${props => 'auto '.repeat(props.beats * 4)};

  .beat-even {
    background-color: #ddd;
  }

  .cell-active {
    background-color: lime;
  }
`;
