import React from 'react';

interface ControlsProps {
  handlePlaySequence: Function;
}

function Controls({ handlePlaySequence }: ControlsProps) {
  return (
    <div>
      <button onClick={() => handlePlaySequence()}>Play</button>
    </div>
  );
}

export default Controls;
