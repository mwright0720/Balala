import { StakeContainer } from "./StakeContainer";

type PropsType = {
  isStakeEnabled: boolean;
  isDeckEnabled: boolean;
  deck: string;
  stake?: string;
  deckImages: Record<string, string>;
  stakeImages: Record<string, string>;
};
const DeckContainer = ({
  isStakeEnabled,
  isDeckEnabled,
  deck,
  stake,
  deckImages,
  stakeImages,
}: PropsType) => {
  const imgSrc = deckImages[deck];
  console.log("The img src is : " + imgSrc);
  const imgAltText = "Image of " + deck;

  return (
    <div className=" flex bg-zinc-800 text-gray-50 min-h-50 min-w-50  border border-4  bg-opacity-50 border-white">
      {isDeckEnabled && <img src={imgSrc} alt={imgAltText}></img>}
      {isStakeEnabled && (
        <StakeContainer stake={stake as string} stakeImages={stakeImages} />
      )}
    </div>
  );
};

export { DeckContainer };
