import { useState } from "react";
import { currencies } from "../../../constants";
import { _CurrencySwitcher, CurBtn } from "./styles";
import { useCurContext } from "../../../providers/CurProvider";

export const CurrencySwitcher = () => {
  const [activeCur, setActiveCur] = useState(0);
  const { setIndex } = useCurContext();

  return (
    <_CurrencySwitcher>
      <p>Валюта</p>
      <div className="currency">
        {currencies.map(({ title }, idx) => (
          <CurBtn
            key={`cur-${idx}`}
            className={`cur-btn ${activeCur === idx ? "active" : ""}`}
            onClick={() => {
              setActiveCur(idx);
              setIndex(idx);
            }}
            index={idx}
            activeCur={activeCur}
          >
            {title}
          </CurBtn>
        ))}
      </div>
    </_CurrencySwitcher>
  );
};
