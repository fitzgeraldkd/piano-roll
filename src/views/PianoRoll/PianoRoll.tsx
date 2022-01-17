import React from 'react';
import Grid from '../../components/Grid/Grid';
import Keyboard from '../../components/Keyboard/Keyboard';
import PianoRollStyles from './PianoRoll.styles';

function PianoRoll() {
  const keys = 88;
  return (
    <PianoRollStyles>
      <Keyboard />
      <Grid styledProps={{beats: 4}} keys={keys} />
    </PianoRollStyles>
  );
}

export default PianoRoll;
