import { _Ticket } from "./style";
import { Button } from "./Button";
import { Info } from "./Info";

export const Ticket = ({ data }) => {
  return (
    <_Ticket>
      <div className="image-wrapper">
        <img
          src="images/Turkish_Airlines.svg"
          alt="Turkish_Airlines"
          width={"100%"}
          height={"auto"}
        />
        <Button price={data.price} />
      </div>
      <Info data={data}></Info>
    </_Ticket>
  );
};
