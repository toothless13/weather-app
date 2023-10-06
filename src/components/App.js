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
  const [errorMessage, setErrorMessage] = useState("");

  const { city, country } = location;

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    // setErrorMessage("");
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage,
    );
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      "",
      setErrorMessage,
    );
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails
        city={city}
        country={country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
};

export default App;
