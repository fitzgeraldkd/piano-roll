import { Note, NoteObj } from "./types";

export function playNote(noteObj: NoteObj) {
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioCtx = new window.AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(noteToFreq(noteObj), 0);
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(0.2);
}

export function noteToFreq(noteObj: NoteObj) {
  const notes: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const startingNoteObj: NoteObj = {note: 'A', octave: 4};
  return 440 * (2 ** (notes.indexOf(noteObj.note) / 12)) * (2 ** (noteObj.octave - startingNoteObj.octave));
}
