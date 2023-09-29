const ForecastSummary = (props) => {
  const { date, description, icon, temperature } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

export default ForecastSummary;
