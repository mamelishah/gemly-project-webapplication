import "./SavedCard.css"

interface SavedCardProp {
    title: string
}


function SavedCard({title} : SavedCardProp) {
    return (
        <article className="saved-card">
            <div id="saved-card-content">
                <h2>{title}</h2>
            </div>
        </article>
    );
}

export default SavedCard;