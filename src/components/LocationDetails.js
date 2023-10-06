const LocationDetails = (props) => {
  const { city, country, errorMessage } = props;
  LocationDetails.defaultProps = {
    errorMessage: "",
  };

  return (
    <h1 className="location-details">
      {errorMessage || `${city}, ${country}`}
    </h1>
  );
};

export default LocationDetails;
