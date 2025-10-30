type Props = {
  stake: string;
  stakeImages: Record<string, string>;
};
const StakeContainer = ({ stake, stakeImages }: Props) => {
  const imgSrc = "./Balala/" + stakeImages[stake];
  return (
    <div className="rounded-full aspect-square">
      <img src={imgSrc}></img>
    </div>
  );
};

export { StakeContainer };
