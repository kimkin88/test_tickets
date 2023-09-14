import React, { useCallback } from "react";
import { CheckboxField } from "../Checkbox";
import { _CheckboxFilter } from "./styles";
import { useDataContext } from "../../../providers/DataProvider";

export const CheckboxFilter = () => {
  const { initialData, allChecked, setCurrentStops } = useDataContext();
  const isChecked = allChecked();
  const maxStops = (tickets) => {
    let max = 0;
    let min = max ? 1 : null;
    tickets.forEach((item) => {
      if (item.stops > max) {
        max = item.stops;
      }
    });
    return Array.from({ length: max + 1 }, (_, i) => i + min);
  };

  const resetChecked = useCallback(() => {
    if (isChecked) {
      return false;
    } else {
      return null;
    }
  }, [isChecked]);

  return (
    <_CheckboxFilter>
      <p>Количество пересадок</p>
      <CheckboxField
        id="all"
        name="all"
        label="Все"
        checked={isChecked}
        onChange={() => setCurrentStops([])}
      />
      {maxStops(initialData).map((stops, idx) => (
        <React.Fragment key={`filter-${idx}`}>
          <CheckboxField
            id={`filter-${idx}`}
            name={`filter-${idx}`}
            label={
              stops === 0
                ? "Без пересадок"
                : `${stops} пересадк${stops === 1 ? "а" : "и"}`
            }
            checked={resetChecked()}
            onChange={(e) => {
              const checked = e.target.checked;
              if (checked) {
                setCurrentStops((prev) => [...new Set([...prev, idx])]);
              } else {
                setCurrentStops((prev) => prev.filter((i) => i !== idx));
              }
            }}
          />
        </React.Fragment>
      ))}
    </_CheckboxFilter>
  );
};
