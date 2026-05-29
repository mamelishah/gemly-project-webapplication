import "./CountryCircleCard.css";

function CountryCircleCard({image, countryName}) {
  return (
    <section className="country-circle-card">
      <img id="country-image" src={image} alt="France Circle" />
      <h5 id="country-name">{countryName}</h5>
    </section>
  );
}

export default CountryCircleCard;
