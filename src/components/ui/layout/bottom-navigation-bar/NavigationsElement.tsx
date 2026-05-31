import './NavigationsElement.css'
import { NavLink } from 'react-router-dom';

function NavigationsElement({ label, iconUrl, to }: { label: string; iconUrl: string; to: string }) {
  return (
    <div className="navigations-element">
      <NavLink to={to} className="nav-button">
        <img src={iconUrl} alt={label} className="nav-icon" />
        <span className="nav-label">{label}</span>
      </NavLink>
    </div>
  );
}

export default NavigationsElement;