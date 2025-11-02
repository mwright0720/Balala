import { useState } from "react";
import { RandomizeBtn } from "./RandomizeBtn";
import { DeckContainer } from "./deck-randomizer/DeckContainer";
import "./App.css";
import { loadImages } from "./loadImages";
import { transformImageObject } from "./transformImageObject";
import { randomizer } from "./randomizer";
import { OptionsContainer } from "./OptionsContainer";

function App() {
  const [deck, setDeck] = useState("");
  const [stake, setStake] = useState("");
  const [enabled, setEnabled] = useState({ Deck: true, Stake: true });

  const { deckImages, stakeImages } = loadImages();
  const transformedDeckImages = transformImageObject(deckImages);
  const transformedStakeImages = transformImageObject(stakeImages);

  const handleBtnClick = () => {
    // At least one thing has to be enabled
    const invalidSelection = Object.values(enabled).every(
      (selection) => selection === false
    );

    if (invalidSelection) {
      // TODO Modify the page content to display this to the user
      console.log("That selection is not valid");
    } else {
      const validDecks = Object.keys(transformedDeckImages);
      const validStakes = Object.keys(transformedStakeImages);

      const randomDeckSelection = randomizer(validDecks);
      const randomStakeSelection = randomizer(validStakes);

      setDeck(randomDeckSelection);
      setStake(randomStakeSelection);
    }
  };

  const handleDeckToggle = () => {
    const isEnabled = enabled.Deck;
    setEnabled({ ...enabled, Deck: !isEnabled });
  };

  const handleStakeToggle = () => {
    const isEnabled = enabled.Stake;
    setEnabled({ ...enabled, Stake: !isEnabled });
  };
  return (
    <div className="flex items-center justify-center bg-indigo-400 min-h-screen">
      <div className="flex flex-col gap-8">
        <DeckContainer
          isStakeEnabled={enabled.Stake}
          isDeckEnabled={enabled.Deck}
          deck={deck}
          stake={stake}
          deckImages={transformedDeckImages}
          stakeImages={transformedStakeImages}
        />
        <RandomizeBtn onClick={handleBtnClick} label="Randomize"></RandomizeBtn>
      </div>

      <OptionsContainer
        toggleDeckEnabled={handleDeckToggle}
        toggleStakeEnabled={handleStakeToggle}
        enabled={enabled}
      />
    </div>
  );
}

export default App;
