import './NavigationsElement.css'
import { NavLink } from 'react-router-dom';

function NavigationsElement({ label, iconUrl, to }: { label: string; iconUrl: string; to: string }) {
  return (
    <div className="navigations-element">
      <NavLink to={to} className="nav-button">
        <img src={iconUrl} alt={label} className="nav-icon" />
        <h5 className="nav-label">{label}</h5>
      </NavLink>
    </div>
  );
}

export default NavigationsElement;