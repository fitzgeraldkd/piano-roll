import React, { useState } from 'react';

interface ControlsProps {
  handlePlaySequence: Function;
}

function Controls({ handlePlaySequence }: ControlsProps) {
  const [loop, setLoop] = useState(false);
  const [bpm, setBpm] = useState(120);

  const handleSetLoop = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(e.target.checked);
  };

  return (
    <div>
      {/* <label htmlFor='loop'>Loop?</label> */}
      {/* <input id='loop' type='checkbox' checked={loop} onChange={handleSetLoop} /> */}
      <button onClick={() => handlePlaySequence(loop, bpm)}>Play</button>
      <button onClick={() => {}}>Stop</button>
    </div>
  );
}

export default Controls;
