import React, { useState } from "react";

const App = () => {
  const [textInput, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(
      firstCorrection ? `Did you mean: ${firstCorrection}?` : ""
    );
  };
  return (
    <div>
      <h1> Spell Check and Auto-Correction</h1>
      <textarea
        value={textInput}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && <p> {suggestedText} </p>}
    </div>
  );
};

export default App;
