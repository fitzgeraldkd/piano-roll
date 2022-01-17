import { Note, NoteObj, SequencedNote } from "./types";

export function playNote(noteObj: NoteObj, start=0, duration=0.125, bpm=120) {
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioCtx = new window.AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(noteToFreq(noteObj), 0);
  oscillator.connect(audioCtx.destination);
  oscillator.start(beatToTime(start, bpm));
  oscillator.stop(beatToTime(start + duration, bpm));
}

export function playSequence(sequence: SequencedNote[], bpm=120, loop=false) {
  const startSequence = () => {
    for (const note of sequence) {
      playNote(note, note.start);
    }
  };

  if (loop) {
    console.log('test');
    return setInterval(startSequence, beatToTime(4, bpm));
  }
  startSequence();

}

export function noteToFreq(noteObj: NoteObj) {
  const notes: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const startingNoteObj: NoteObj = {note: 'A', octave: 4};
  return 440 * (2 ** (notes.indexOf(noteObj.note) / 12)) * (2 ** (noteObj.octave - startingNoteObj.octave));
}

export function beatToTime(beat: number, bpm: number) {
  return beat / (bpm / 60);
}
