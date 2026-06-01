import "./ProfileCard.css"
import backIcon from "/src/assets/icons/navigation/arrowRightSmall-icon.svg"

export default function ProfileCard({ title, showBackIcon }) {
    return (
        <section className="profile-card">
                <h4>{title}</h4>
                {showBackIcon ? (
                <img src={backIcon} alt="Back Icon" />
                ) : null}
        </section>
    );
}