import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Icons.css";

export default function Icons(props) {
  let iconsValue = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "light-rain": "RAIN",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  return (
    <div className="Icon">
      <div className="row">
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate1]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate2]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate3]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate4]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="col-2">
          <ReactAnimatedWeather
            icon={iconsValue[props.iconUpdate5]}
            color="#000000"
            size={props.size}
            animate={true}
          />
        </div>
      </div>
    </div>
  );
}
