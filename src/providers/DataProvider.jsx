import { createContext, useContext, useState, useEffect } from "react";
import tickets from "../data/tickets.json";

const CurrentDataContext = createContext({
  setData: null,
  data: null,
  currentStops: null,
  setCurrentStops: null,
});

const CurrentDataProvider = ({ children }) => {
  const [data, setData] = useState(tickets.tickets);
  const [currentStops, setCurrentStops] = useState([]);
  const allChecked = () => {
    if (data.length === tickets.tickets.length && !currentStops.length) {
      setData(tickets.tickets);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    allChecked();
  }, [data, currentStops]);

  useEffect(() => {
    if (currentStops.length) {
      setData(
        tickets.tickets.filter((item) => currentStops.includes(item.stops))
      );
    } else {
      setData(tickets.tickets);
    }
  }, [currentStops]);

  return (
    <CurrentDataContext.Provider
      value={{
        data,
        setData,
        allChecked,
        currentStops,
        setCurrentStops,
        initialData: tickets.tickets,
      }}
    >
      {children}
    </CurrentDataContext.Provider>
  );
};

const useDataContext = () => {
  const props = useContext(CurrentDataContext);
  return { ...props };
};

export { useDataContext, CurrentDataProvider };
