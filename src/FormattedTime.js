import React from "react";

export default function FormattedTime(props) {
  let hours = props.time.getHours();

  let minutes = props.time.getMinutes();

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let formatAMPM = `${hours}:${minutes} ${ampm}`;

  return <div>{formatAMPM}</div>;
}
