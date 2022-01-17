# Piano Roll

My submission for Qvault's 2022/01/17 hackathon! My virtual instrument is a piano roll with a simple sequencer!

## Running Piano Roll

To run this locally, clone this repository and navigate to the root directory in your terminal. Then run the following commands:

```bash
npm install
npm start
```

Once the React server is running it should automatically open in your browser, but if not the default address this runs at is `http://localhost:3000/`.

## Using Piano Roll

Click on the keys on the left to just hear a note.

Click on a cell in the sequencer to add or remove it from your sequence. You should hear the note as you toggle the cell on and off.

Once your sequence is set, click the Play button at the top to hear it! You can change the BPM and also set it to loop if desired.

If there is any rogue audio playing, click the stop button and it should close the audio context and open a new one. 

To clear the sequencer, click the Clear button. There is no undo at this time!

## Notes

There is currently nothing stopping you from clicking the play button multiple times and having the sequence playing on top of itself. Click use the stop button and it should stop ALL the sequences that are currently playing.

Once the play button is clicked, it will play what is in state when that button is clicked and will not recognize changes to the oscillator, BPM, or the sequence. To hear the changes you just need to click the play button again.
