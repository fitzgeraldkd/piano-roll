export type Note = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';

export type Wave = 'sine' | 'square' | 'sawtooth' | 'triangle';

export interface NoteObj {
  note: Note;
  octave: number;
}

export interface SequencedNote extends NoteObj {
  start: number;
}
