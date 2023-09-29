import "../styles/App.css";
import LocationDetails from "./LocationDetails";

const App = ({ location }) => {
  const { city, country } = location;

  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
};

export default App;
