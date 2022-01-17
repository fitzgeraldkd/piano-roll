import { SequencedNote, TimingObj } from "./types";

export function memoizeSequence(sequence: SequencedNote[]) {
  const memoizedSequence: {[prop: string]: TimingObj[]} = {};
  for (const { note, octave, ...timing} of sequence) {
    const key = `${note}${octave}`;
    if (key in memoizedSequence) {
      memoizedSequence[key].push(timing);
    } else {
      memoizedSequence[key] = [timing];
    }
  }
  return memoizedSequence;
}
