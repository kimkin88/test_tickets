import { useCurContext } from "../../../providers/CurProvider";
import { _Button } from "./style";

export const Button = ({ price }) => {
  const {
    currency: { rate, letter },
  } = useCurContext();

  return (
    <_Button onClick={(e) => e.preventDefault()}>
      <p>{`Купить\nза ${(price * rate).toFixed()}${letter}`}</p>
    </_Button>
  );
};
