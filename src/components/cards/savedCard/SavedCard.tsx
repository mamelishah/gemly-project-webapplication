import "./SavedCard.css"

function SavedCard({title}) {
    return (
        <section className="saved-card">
            <div id="saved-card-content">
                <h2>{title}</h2>
            </div>
        </section>
    );
}

export default SavedCard;