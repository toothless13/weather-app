import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  let endpointBU = "https://cmd-shift-weather-app-alt.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
    endpointBU += `?city=${searchText}`;
  }
  try {
    const { data } = await axios.get(endpoint || endpointBU);
    setSelectedDate(data.forecasts[0].date);
    setLocation(data.location);
    setForecasts(data.forecasts);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getForecast;
