type PropsType = {
  isStakeEnabled: boolean;
  deck: string;
  stake?: string;
};
const DeckContainer = ({ isStakeEnabled, deck, stake }: PropsType) => {
  return (
    <div className="bg-zinc-800 text-gray-50 min-h-50 min-w-50  border border-4  bg-opacity-50 border-white">
      {deck}
    </div>
  );
};

export { DeckContainer };
