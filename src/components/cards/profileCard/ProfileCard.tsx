import "./ProfileCard.css"
import backIcon from "../../../assets/icons/navigation/arrowLeftSmall-icon.svg"

type ProfileCardProps = {
    title: string
    showBackIcon?: boolean
}

export default function ProfileCard({ title, showBackIcon }: ProfileCardProps) {
    return (
        <section className="profile-card">
                <h4>{title}</h4>
                {showBackIcon ? (
                <img src={backIcon} alt="Back Icon" />
                ) : null}
        </section>
    );
}