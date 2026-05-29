import './NavigationsElement.css'

function NavigationsElement({ label, iconUrl }: { label: string; iconUrl: string }) {
  return (
    <div className="navigations-element">
      <button className="nav-button">
        <img src={iconUrl} alt={label} className="nav-icon" />
        <span className="nav-label">{label}</span>
      </button>
    </div>
  );
}

export default NavigationsElement;