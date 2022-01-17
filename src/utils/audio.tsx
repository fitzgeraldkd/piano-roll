import { Note, NoteObj, SequencedNote } from "./types";

export function playNote(audioCtx: AudioContext | undefined, noteObj: NoteObj, start=0, duration=0.125, bpm=120) {
  // const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // const audioCtx = new window.AudioContext();
  if (!audioCtx) {
    console.error('Audio context has not loaded');
    return;
  }
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(noteToFreq(noteObj), 0);
  oscillator.connect(audioCtx.destination);
  oscillator.start(audioCtx.currentTime + beatToTime(start, bpm));
  oscillator.stop(audioCtx.currentTime + beatToTime(start + duration, bpm));
}

export function playSequence(audioCtx: AudioContext | undefined, sequence: SequencedNote[], bpm=120, loop=false) {
  const startSequence = () => {
    for (const note of sequence) {
      playNote(audioCtx, note, note.start);
    }
  };

  if (loop) {
    startSequence();
    return setInterval(startSequence, beatToTime(4, bpm) * 1000);
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
