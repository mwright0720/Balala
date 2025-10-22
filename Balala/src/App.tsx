import { useState } from "react";
import { RandomizeBtn } from "./RandomizeBtn";
import { DeckContainer } from "./DeckContainer";
import "./App.css";
import { loadImages } from "./loadImages";
import { transformImageObject } from "./transformImageObject";

function App() {
  const [deck, setDeck] = useState("");
  const [stake, setStake] = useState("");
  const [enabled, setEnabled] = useState({ Deck: true, Stake: true });

  const { deckImages, stakeImages } = loadImages();
  const transformedDeckImages = transformImageObject(deckImages);

  const handleBtnClick = () => {
    // At least one thing has to be enabled
    const invalidSelection = Object.values(enabled).every(
      (selection) => selection === false
    );

    if (invalidSelection) {
      // TODO Modify the page content to display this to the user
      console.log("That selection is not valid");
    } else {
      // TODO configure this to work with the randomize function
      setDeck("Red_Deck");
      setStake("Gold_Stake");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <RandomizeBtn onClick={handleBtnClick} label="Randomize"></RandomizeBtn>

      <div>
        <DeckContainer
          isStakeEnabled={true}
          deck={deck}
          stake={stake}
          deckImages={transformedDeckImages}
        />
      </div>
    </div>
  );
}

export default App;
