import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const endpoint =
    "https://cmd-shift-weather-app.onrender.com/forecast?city=Oxford";
  try {
    const { data } = await axios.get(endpoint);
    setSelectedDate(data.forecasts[0].date);
    setLocation(data.location);
    setForecasts(data.forecasts);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getForecast;
