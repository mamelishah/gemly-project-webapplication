import "./TopBar.css";
import arrowLeftIcon from "/src/assets/icons/navigation/arrowLeftBig-icon.svg";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";


interface TopBarProps {
  title: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  leftIcon?: string;
  rightIcon?: string;
}

function TopBar({
  title,
  showLeftIcon = false,
  showRightIcon = false,
  onLeftIconClick,
  onRightIconClick,
  leftIcon,
  rightIcon,
}: TopBarProps) {
  const hasIcons = showLeftIcon || showRightIcon;

  return (
    <section id="top-bar" className={!hasIcons ? "centered" : ""}>
      {showLeftIcon ? (
        <button id="top-bar-back-button" onClick={onLeftIconClick}>
          <img src={leftIcon} alt="Left" />
        </button>
      ) : <div className="top-bar-placeholder" />}

      <h1>{title}</h1>

      {showRightIcon ? (
        <button id="top-bar-close-button" onClick={onRightIconClick}>
          <img src={rightIcon} alt="Right" />
        </button>
      ) : <div className="top-bar-placeholder" />}
    </section>
  );
}

export default TopBar;