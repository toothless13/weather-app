const ForecastDetails = (props) => {
  const { forecast } = props;
  const { date, temperature, humidity, wind } = forecast;

  const formattedDate = new Date(date).toDateString();
  const { min: minTemp, max: maxTemp } = temperature;
  const { speed: windSpeed, direction: windDirection } = wind;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temp">
        Minimum Temperature: {minTemp}&deg;C
      </div>
      <div className="forecast-details__max-temp">
        Maximum Temperature: {maxTemp}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {windSpeed}
      </div>
      <div
        className="forecast-details__wind-direction"
        data-testid="forecast-details__wind-direction"
      >
        Wind Direction: {windDirection}
      </div>
    </div>
  );
};

export default ForecastDetails;
