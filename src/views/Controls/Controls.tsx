import React, { useState } from 'react';
import ControlsStyles from './Controls.styles';

interface ControlsProps {
  handlePlaySequence: Function;
  handleStopAudio: Function;
  handleClearSequence: Function;
}

function Controls({ handlePlaySequence, handleStopAudio, handleClearSequence }: ControlsProps) {
  const [loop, setLoop] = useState(false);
  const [bpm, setBpm] = useState(120);

  const handleSetLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.target.checked);
  };

  const handleChangeBpm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(parseInt(e.target.value, 10));
  };

  return (
    <ControlsStyles>
      <span className='title'>
        Piano Roll by Kenny Fitzgerald
      </span>
      <span className='inputs'>
        <label htmlFor='loop'>Loop?</label>
        <input id='loop' type='checkbox' checked={loop} onChange={handleSetLoop} />

        <label htmlFor='bpm'>BPM:</label>
        <input id='bpm' type='number' value={bpm} onChange={handleChangeBpm} min={30} max={500} />

        <button onClick={() => handlePlaySequence(loop, bpm)}>Play</button>
        <button onClick={() => handleStopAudio()}>Stop</button>
        <button onClick={() => handleClearSequence()}>Clear</button>
      </span>
      
    </ControlsStyles>
  );
}

export default Controls;
