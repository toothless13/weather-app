import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, description, icon, temperature } = forecast;
        return (
          <ForecastSummary
            key={date}
            date={date}
            description={description}
            icon={icon.toString()}
            temperature={temperature}
            onSelect={onForecastSelect}
          />
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
