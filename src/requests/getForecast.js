import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const endpoint =
    "https://cmd-shift-weather-app.onrender.com/forecast?city=Oxford";
  const endpointBU = "https://cmd-shift-weather-app-alt.onrender.com/";
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
