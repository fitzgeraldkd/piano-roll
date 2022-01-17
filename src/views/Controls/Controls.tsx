import React, { useState } from 'react';

interface ControlsProps {
  handlePlaySequence: Function;
  handleStopAudio: Function;
}

function Controls({ handlePlaySequence, handleStopAudio }: ControlsProps) {
  const [loop, setLoop] = useState(false);
  const [bpm, setBpm] = useState(120);

  const handleSetLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.target.checked);
  };

  const handleChangeBpm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor='loop'>Loop?</label>
      <input id='loop' type='checkbox' checked={loop} onChange={handleSetLoop} />

      <label htmlFor='bpm'>BPM:</label>
      <input id='bpm' type='number' value={bpm} onChange={handleChangeBpm} min={30} max={500} />

      <button onClick={() => handlePlaySequence(loop, bpm)}>Play</button>
      <button onClick={() => handleStopAudio()}>Stop</button>
    </div>
  );
}

export default Controls;
