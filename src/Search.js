import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [forecast, setForecast] = useState(defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      time: response.data.time,
    });
  }

  function showForecast(response) {
    setForecast({
      tempMin1: Math.round(response.data.daily[0].temperature.minimum),
      tempMax1: Math.round(response.data.daily[0].temperature.maximum),
      icon1: response.data.daily[0].condition.icon,
      time1: response.data.daily[0].time,
      tempMin2: Math.round(response.data.daily[1].temperature.minimum),
      tempMax2: Math.round(response.data.daily[1].temperature.maximum),
      icon2: response.data.daily[1].condition.icon,
      time2: response.data.daily[1].time,
      tempMin3: Math.round(response.data.daily[2].temperature.minimum),
      tempMax3: Math.round(response.data.daily[2].temperature.maximum),
      icon3: response.data.daily[2].condition.icon,
      time3: response.data.daily[2].time,
      tempMin4: Math.round(response.data.daily[3].temperature.minimum),
      tempMax4: Math.round(response.data.daily[3].temperature.maximum),
      icon4: response.data.daily[3].condition.icon,
      time4: response.data.daily[3].time,
      tempMin5: Math.round(response.data.daily[4].temperature.minimum),
      tempMax5: Math.round(response.data.daily[4].temperature.maximum),
      icon5: response.data.daily[4].condition.icon,
      time5: response.data.daily[4].time,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    weatherApiCall();
    forecastApiCall();
  }

  function weatherApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(showForecast);
  }
  function cityUpdates(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name..."
                className="form-control"
                onChange={cityUpdates}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <Weather
          city={weather.city}
          temperature={weather.temperature}
          humidity={weather.humidity}
          description={weather.description}
          wind={weather.wind}
        />
        <Forecast
          minTemp1={forecast.tempMin1}
          minTemp2={forecast.tempMin2}
          minTemp3={forecast.tempMin3}
          minTemp4={forecast.tempMin4}
          minTemp5={forecast.tempMin5}
          maxTemp1={forecast.tempMax1}
          maxTemp2={forecast.tempMax2}
          maxTemp3={forecast.tempMax3}
          maxTemp4={forecast.tempMax4}
          maxTemp5={forecast.tempMax5}
          time1={forecast.time1}
          time2={forecast.time2}
          time3={forecast.time3}
          time4={forecast.time4}
          time5={forecast.time5}
          icon1={forecast.icon1}
          icon2={forecast.icon2}
          icon3={forecast.icon3}
          icon4={forecast.icon4}
          icon5={forecast.icon5}
        />
        <Footer />
      </div>
    );
  } else {
    weatherApiCall();
    forecastApiCall();
    return <p>Loading...</p>;
  }
}
