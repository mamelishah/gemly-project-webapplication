import "./TopBar.css";
import arrowLeftIcon from "/src/assets/icons/navigation/arrowLeftBig-icon.svg";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";

function TopBar({
  title,
  showLeftIcon,
  showRightIcon,
  onLeftIconClick,
  onRightIconClick,
}) {
  return (
    <section id="top-bar">
      {showLeftIcon ? (
        <button id="top-bar-back-button" onClick={onLeftIconClick}>
          <img src={arrowLeftIcon} alt="Arrow Left" />
        </button>
      ) : null}
      <h1>{title}</h1>
      {showRightIcon ? (
        <button id="top-bar-close-button" onClick={onRightIconClick}>
          <img src={cancelIcon} alt="Close" />
        </button>
      ) : null}
    </section>
  );
}

export default TopBar;
