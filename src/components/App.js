// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  const { city, country } = location;

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchText);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, "");
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
