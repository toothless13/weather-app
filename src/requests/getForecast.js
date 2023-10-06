/* eslint-disable no-console */
import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage,
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
    setErrorMessage("");
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      setErrorMessage("No such town or city, please try again!");
      console.error("Location is not valid", error);
    }
    if (status === 500) {
      setErrorMessage("There was a server error, please try again later!");
      console.error("Server error", error);
    }
  }
};

export default getForecast;
