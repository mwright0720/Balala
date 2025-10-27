import { Button } from "react-aria-components";

type PropsType = {
  label: string;
  onClick: () => void;
};

const RandomizeBtn = ({ label, onClick }: PropsType) => {
  return (
    <Button
      className="text-lg font-balatro text-center text-white  px-8 py-2 bg-red-500"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export { RandomizeBtn };
