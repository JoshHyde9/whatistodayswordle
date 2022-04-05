# What is Today's Wordle?

This website outputs today's Wordle.

## How does it work?

Viewing the game's source, on line 1101 is the start of the array of words (which is found in src/wordList.ts.)

1. In line 14109 there is a date / time which is used for day #1 of the word list.
2. Line 14111 gets today's time.
3. Line 14113 gets the difference of the two times and minuses 864e5 milliseconds to get a 3 digit number.

- This number is used as today and thus, the index to the array of words.
