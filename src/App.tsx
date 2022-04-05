import React, { useEffect, useState } from "react";
import "./App.css";

import { wordList } from "./wordList";

type WordProps = {
  number: number;
  word: string;
};

export const App: React.FC<{}> = () => {
  const [today, setToday] = useState<WordProps>({ number: 0, word: "" });

  useEffect(() => {
    const today = new Date().getTime();
    const whenWordleStarted = new Date(2021, 5, 19, 0, 0, 0, 0).getTime();

    const todaysIndex = Math.floor((today - whenWordleStarted) / 864e5);
    const todaysWord = wordList[todaysIndex];

    const capitaliseTodaysWord =
      todaysWord.charAt(0).toUpperCase() + todaysWord.substring(1);

    setToday({ number: todaysIndex, word: capitaliseTodaysWord });
  }, []);

  const { word, number } = today;

  return (
    <main>
      <h1>What is Today's Wordle? #{number}</h1>
      <h2>{word}</h2>
    </main>
  );
};
