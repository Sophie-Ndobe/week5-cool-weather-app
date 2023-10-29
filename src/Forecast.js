import React from "react";
import "./Forecast.css";
import Icons from "./Icons";

export default function Forecast(props) {
  let date1 = new Date(props.time1 * 1000);
  let day1 = date1.getDay();
  let date2 = new Date(props.time2 * 1000);
  let day2 = date2.getDay();
  let date3 = new Date(props.time3 * 1000);
  let day3 = date3.getDay();
  let date4 = new Date(props.time4 * 1000);
  let day4 = date4.getDay();
  let date5 = new Date(props.time5 * 1000);
  let day5 = date5.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="Forecast mt-5">
      <div className="row">
        <div className="col">
          <p className="mb-3">{days[day1]}</p>
          <div className="icon1">
            <Icons iconUpdate1={props.icon1} size={50} />
          </div>
          <p className="temperature mt-3">
            <strong>{props.maxTemp1}°</strong> {props.minTemp1}°
          </p>
        </div>
        <div className="col">
          <p className="mb-3">{days[day2]}</p>
          <div className="icon2">
            <Icons iconUpdate2={props.icon2} size={50} />
          </div>
          <p className="temperature mt-3">
            <strong>{props.maxTemp2}°</strong> {props.minTemp2}°
          </p>
        </div>
        <div className="col">
          <p className="mb-3">{days[day3]}</p>
          <div className="icon3">
            <Icons iconUpdate3={props.icon3} size={50} />
          </div>
          <p className="temperature mt-3">
            <strong>{props.maxTemp3}°</strong> {props.minTemp3}°
          </p>
        </div>
        <div className="col">
          <p className="mb-3">{days[day4]}</p>
          <div className="icon4">
            <Icons iconUpdate4={props.icon4} size={50} />
          </div>
          <p className="temperature mt-3">
            <strong>{props.maxTemp4}°</strong> {props.minTemp4}°
          </p>
        </div>
        <div className="col">
          <p className="mb-3">{days[day5]}</p>
          <div className="icon5">
            <Icons iconUpdate5={props.icon5} size={50} />
          </div>
          <p className="temperature mt-3">
            <strong>{props.maxTemp5}°</strong> {props.minTemp5}°
          </p>
        </div>
      </div>
    </div>
  );
}
