import "./CountryCircleCard.css";

interface CountryCircleProp {
  image: string,
  countryName: string
}

function CountryCircleCard({image, countryName} : CountryCircleProp) {
  return (
    <article className="country-circle-card">
      <img id="country-image" src={image} alt={`${countryName} image`} />
      <h5 id="country-name">{countryName}</h5>
    </article>
  );
}

export default CountryCircleCard;
