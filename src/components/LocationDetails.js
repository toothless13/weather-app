const LocationDetails = (props) => {
  const { city, country } = props;
  return <h1 className="location-details">{`${city}, ${country}`}</h1>;
};

export default LocationDetails;
