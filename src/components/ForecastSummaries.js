import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, description, icon, temperature } = forecast;
        return (
          <ForecastSummary
            key={date}
            date={date}
            description={description}
            icon={icon}
            temperature={temperature}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
