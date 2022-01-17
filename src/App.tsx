import React, { useEffect, useState } from 'react';
import { playSequence } from './utils/audio';
import { SequencedNote } from './utils/types';
import Controls from './views/Controls/Controls';
import PianoRoll from './views/PianoRoll/PianoRoll';

function App() {
  const [sequence, setSequence] = useState<SequencedNote[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [audioCtx, setAudioCtx] = useState<AudioContext>();

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
    setAudioCtx(new window.AudioContext());
  }, []);

  const handleAddToSequence = (noteToAdd: SequencedNote) => {
    setSequence(currentSequence => [...currentSequence, noteToAdd]);
  };

  const handleRemoveFromSequence = (noteToRemove: SequencedNote) => {
    setSequence(currentSequence => currentSequence.filter(note => {
      let key: keyof typeof note;
      for (key in note) {
        if (note[key] !== noteToRemove[key]) {
          return true;
        }
      }
      return false;
    }));
  };

  const handleClearSequence = () => {
    setSequence([]);
  };

  const handlePlaySequence = (loop: boolean, bpm: number) => {
    const newIntervalId = playSequence(audioCtx, sequence, bpm, loop);
    if (newIntervalId) {
      setIntervalId(newIntervalId)
    }
  };

  const handleStopAudio = () => {
    if (audioCtx) {
      if (intervalId) {
        clearInterval(intervalId);
      }
      audioCtx.close().then(() => setAudioCtx(new window.AudioContext()));
    } else {
      setAudioCtx(new window.AudioContext());
    }
  };

  return (
    <div className="App">
      <Controls handlePlaySequence={handlePlaySequence} handleStopAudio={handleStopAudio} handleClearSequence={handleClearSequence} />
      <PianoRoll
        sequence={sequence}
        handleAddToSequence={handleAddToSequence}
        handleRemoveFromSequence={handleRemoveFromSequence}
        audioCtx={audioCtx}
      />
    </div>
  );
}

export default App;
