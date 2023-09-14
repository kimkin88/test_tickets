import { _Filter } from "./style";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { CheckboxFilter } from "./CheckboxFilter";

export const Filter = () => {
  return (
    <_Filter>
      <CurrencySwitcher />
      <CheckboxFilter />
    </_Filter>
  );
};
