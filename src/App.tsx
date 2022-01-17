import React, { useEffect, useState } from 'react';
import { playSequence } from './utils/audio';
import { SequencedNote } from './utils/types';
import Controls from './views/Controls/Controls';
import PianoRoll from './views/PianoRoll/PianoRoll';

function App() {

  const [bpm, setBpm] = useState(120);
  const [sequence, setSequence] = useState<SequencedNote[]>([]);

  const billieJean: SequencedNote[] = [
    {note: 'F#', octave: 3, start: 0},
    {note: 'C#', octave: 3, start: 0.5},
    {note: 'E', octave: 3, start: 1},
    {note: 'F#', octave: 3, start: 1.5},
    {note: 'E', octave: 3, start: 2},
    {note: 'C#', octave: 3, start: 2.5},
    {note: 'B', octave: 3, start: 3},
    {note: 'C#', octave: 3, start: 3.5},
  ];

  useEffect(() => {
    setSequence(billieJean);
  }, []);

  const handlePlaySequence = () => {
    playSequence(sequence);
  };

  return (
    <div className="App">
      <Controls handlePlaySequence={handlePlaySequence} />
      <PianoRoll sequence={sequence} />
    </div>
  );
}

export default App;
