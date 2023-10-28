import React from "react";
import "./Forecast.css";

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
        <div className="col-2">
          <ul>
            <li>{days[day1]}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
            </li>
            <li>{props.maxTemp1}° {props.minTemp1}°</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>{days[day2]}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
            </li>
            <li>{props.maxTemp2}° {props.minTemp2}°</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>{days[day3]}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
            </li>
            <li>{props.maxTemp3}° {props.minTemp3}°</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>{days[day4]}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
            </li>
            <li>{props.maxTemp4}° {props.minTemp4}°</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>{days[day5]}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
            </li>
            <li>{props.maxTemp5}° {props.minTemp5}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
