import { useDataContext } from "../../providers/DataProvider";
import { Filter } from "../Filter";
import { Ticket } from "../Ticket";
import { AppContent } from "./style";

export const App = () => {
  const { data } = useDataContext();

  return (
    <AppContent className="App">
      <div className="logo">
        <img src="images/plane.svg" alt="plane" width={30} />
      </div>
      <Filter />
      <div className="tickets">
        {data
          ?.map((item, idx) => <Ticket key={`data-${idx}`} data={item} />)
          .sort((a, b) => a?.props?.data.price - b?.props?.data.price)}
      </div>
    </AppContent>
  );
};
