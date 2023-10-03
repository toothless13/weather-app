const ForecastDetails = (props) => {
  const { date, temperature, humidity, wind } = props;
  const formattedDate = new Date(date).toDateString();
  const { min: minTemp, max: maxTemp } = temperature;
  const { speed: windSpeed, direction: windDirection } = wind;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">{minTemp}</div>
      <div className="forecast-details__max-temp">{maxTemp}</div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__wind-speed">{windSpeed}</div>
      <div className="forecast-details__wind-direction">{windDirection}</div>
    </div>
  );
};

export default ForecastDetails;
