import "../styles/App.css";
import LocationDetails from "./LocationDetails";

const App = ({ location }, { forecasts }) => {
  const { city, country } = location;
  console.log(forecasts);
  // const { date } = forecasts;
  // console.log(date);
  // const { date, temperature, description, icon } = forecasts[0];
  // console.log(date, temperature, description, icon);
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
};

export default App;
