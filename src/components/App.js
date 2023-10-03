import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecasts={forecasts[0]} />
    </div>
  );
};

export default App;
