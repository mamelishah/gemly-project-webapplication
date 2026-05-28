import "./TopBar.css";
import arrowLeftIcon from "/src/assets/icons/navigation/arrowLeftBig-icon.svg";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";

function TopBar() {
  return (
    <section id="top-bar">
      <img src={arrowLeftIcon} alt="Arrow Left" />
      <h1>Top Bar</h1>
      <img src={cancelIcon} alt="Close" />
    </section>
  );
}

export default TopBar;
