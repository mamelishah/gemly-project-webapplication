import "./CountryCircleCard.css";
import image from "/src/assets/images/countries/Frankrig/france-main-image.png";

function CountryCircleCard() {
  return (
    <section className="country-circle-card">
      <img id="country-image" src={image} alt="France Circle" />
      <h4 id="country-name">Frankrig</h4>
    </section>
  );
}

export default CountryCircleCard;
