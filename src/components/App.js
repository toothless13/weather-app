// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const { city, country } = location;

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const getForecast = async () => {
    const endpoint =
      "https://cmd-shift-weather-app.onrender.com/forecast?city=Oxford";
    try {
      const { data } = await axios.get(endpoint);
      setSelectedDate(data.forecasts[0].date);
      setLocation(data.location);
      setForecasts(data.forecasts);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
