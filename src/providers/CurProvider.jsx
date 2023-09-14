import { createContext, useContext, useEffect, useState } from "react";
import { currencies } from "../constants";

const CurrentCurContext = createContext({
  setCurrency: null,
  currency: null,
});

const CurrentCurProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [currency, setCurrency] = useState(currencies[index]);

  useEffect(() => setCurrency(currencies[index]), [index]);

  return (
    <CurrentCurContext.Provider
      value={{
        currency,
        index,
        setIndex,
      }}
    >
      {children}
    </CurrentCurContext.Provider>
  );
};

const useCurContext = () => {
  const props = useContext(CurrentCurContext);
  return { ...props };
};

export { useCurContext, CurrentCurProvider };
