import type { Dispatch, SetStateAction } from "react";
import { OptionToggle } from "./OptionToggle";

type Props = {
  toggleDeckEnabled: Dispatch<SetStateAction<boolean>>;
  toggleStakeEnabled: Dispatch<SetStateAction<boolean>>;
  enabled: Record<string, boolean>;
};
const OptionsContainer = ({
  toggleDeckEnabled,
  toggleStakeEnabled,
  enabled,
}: Props) => {
  return (
    <div className="flex  flex-col space-around gap-2">
      I want to randomize
      <OptionToggle
        label={"stake"}
        onToggle={toggleStakeEnabled}
        isEnabled={enabled.Stake}
      />
      <OptionToggle
        label={"deck"}
        onToggle={toggleDeckEnabled}
        isEnabled={enabled.Deck}
      />
    </div>
  );
};

export { OptionsContainer };
