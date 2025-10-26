import type { Dispatch, SetStateAction } from "react";
import { ToggleButton } from "react-aria-components";

type Props = {
  label: string;
  onToggle: Dispatch<SetStateAction<boolean>>;
  isEnabled: boolean;
};
const OptionToggle = ({ label, onToggle, isEnabled }: Props) => {
  if (isEnabled) {
    return (
      <ToggleButton
        className={"bg-green-700 text-white aspect-square"}
        onChange={onToggle}
      >
        {label}
      </ToggleButton>
    );
  } else {
    return (
      <ToggleButton
        className={"bg-neutral-200 text-white aspect-square"}
        onChange={onToggle}
      >
        {label}
      </ToggleButton>
    );
  }
};

export { OptionToggle };
