import "../styles/App.css";
import ForecastSummaries from "./ForecastSummaries";
import LocationDetails from "./LocationDetails";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};

export default App;
