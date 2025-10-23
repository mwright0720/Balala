import { StakeContainer } from "./StakeContainer";

type PropsType = {
  isStakeEnabled: boolean;
  deck: string;
  stake?: string;
  deckImages: Record<string, string>;
  stakeImages: Record<string, string>;
};
const DeckContainer = ({
  isStakeEnabled,
  deck,
  stake,
  deckImages,
  stakeImages,
}: PropsType) => {
  const imgSrc = deckImages[deck];
  console.log("The image source is " + imgSrc);
  console.log("The passed key is" + deck);
  console.log("The available keys are" + Object.keys(deckImages));
  console.log(deckImages["./assets/decks/Abandoned_Deck.png"]);
  const imgAltText = "Image of " + deck;

  if (isStakeEnabled) {
    return (
      <div className=" flex bg-zinc-800 text-gray-50 min-h-50 min-w-50  border border-4  bg-opacity-50 border-white">
        <img src={imgSrc} alt={imgAltText}></img>
        <StakeContainer stake={stake as string} stakeImages={stakeImages} />
      </div>
    );
  } else {
    return (
      <div className="bg-zinc-800 text-gray-50 min-h-50 min-w-50  border border-4  bg-opacity-50 border-white">
        <img src={imgSrc} alt={imgAltText}></img>
      </div>
    );
  }
};
export { DeckContainer };
