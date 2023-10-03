import iconData from "../data/iconData.json";

const ForecastSummary = (props) => {
  const { date, description, icon, temperature, onSelect } = props;
  const weatherCode = `${icon.slice(0, 1)}00`;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="icon showing weather code" />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
