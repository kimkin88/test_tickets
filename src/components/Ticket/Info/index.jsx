import { _Info } from "./style";
import { months, weekDays } from "../../../constants";

export const Info = ({ data }) => {
  const {
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    origin,
    origin_name,
    destination,
    destination_name,
    stops,
  } = data;

  const getDate = (date) => {
    const dateArr = date.split(".");
    const newDate = [dateArr[1], dateArr[0], `20${dateArr[2]}`].join(".");
    const d = new Date(newDate).toDateString().split(" ");
    return `${d[2]} ${months[d[1]]} ${d[3]}, ${weekDays[d[0]]}`;
  };

  return (
    <_Info>
      {" "}
      <div className="info-head">
        <div className="departure">
          <p className="time">{departure_time}</p>
          <div>
            <p>{`${origin}, ${origin_name}`}</p>
            <span>{getDate(departure_date)}</span>
          </div>
        </div>
        <div className="air">
          <p>
            {!stops
              ? "Без пересадок"
              : `${stops} пересадк${stops === 1 ? "а" : "и"}`}
          </p>
          <div className="plane">
            <div className="line" />
            <img src="images/plane.svg" width={8} alt="plane" />
          </div>
        </div>
        <div className="arrival">
          <p className="time">{arrival_time}</p>
          <div>
            <p>{`${destination}, ${destination_name}`}</p>
            <span>{getDate(arrival_date)}</span>
          </div>
        </div>
      </div>
    </_Info>
  );
};
