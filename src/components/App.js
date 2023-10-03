// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecasts={selectedForecast} />
    </div>
  );
};

export default App;
