
import profilImagePlaceholder from "/src/assets/images/profil-assets/profil-pic-default.png";
import "./onboarding.css";
import "./slideCreateUser.css";
import "./addProfilImage.css"

function AddProfilImage() {
  return (
    <div className="onboarding-page">
        <div className="main-content">
          
        <div className="text-container-onboarding">
          <h1 className="slide-title">Vælg et profilbillede</h1>
          <p className="slide-infobox">Tilføj et billede af dig selv, så andre kan se hvem du er, når du poster eller kommenterer opslag</p>
        </div>
        <div className= "profile-image-placeholder">
          <img src={profilImagePlaceholder} alt="Profilbillede placeholder" className="profile-image"/>
        </div>
       
      </div>
    </div>
  );
}

export default AddProfilImage