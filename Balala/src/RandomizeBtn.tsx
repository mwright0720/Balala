import { Button } from "react-aria-components";

type PropsType = {
  label: string;
  onClick: () => void;
};

const RandomizeBtn = ({ label, onClick }: PropsType) => {
  return (
    <Button
      className="font-md text-center text-white  px-4 bg-red-500"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export { RandomizeBtn };
