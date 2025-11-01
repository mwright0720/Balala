type Props = {
  stake: string;
  stakeImages: Record<string, string>;
};
const StakeContainer = ({ stake, stakeImages }: Props) => {
  const imgSrc = stakeImages[stake];
  const newImgSrc =
    "/Balala/" + imgSrc.replace("../", "").replace("/public", "");
  return (
    <div className="rounded-full aspect-square">
      <img src={newImgSrc}></img>
    </div>
  );
};

export { StakeContainer };
