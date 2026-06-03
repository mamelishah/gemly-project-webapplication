import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";
import CommentIcon from "/src/assets/icons/card funktioner/comment-icon.png";

interface DetailCardProps {
  image: string;
  title: string;
  description: string;
}
function DetailCard({ image, title, description }: DetailCardProps) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/items/${id}`);
        if (!response.ok) throw new Error("Kunne ikke hente data");
 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <div className="detail-card">Indlæser...</div>;
  if (error) return <div className="detail-card">Fejl: {error}</div>;

  return (
    <div className="detail-card">
      <img src={image} alt={title} />
      <div className="detail-card-functions"></div>
      <div className="detail-card-functions">
        <button><img src={NavigationIcon} alt="Location" /></button>
        <button><img src={CommentIcon} alt="Comment" /></button>
        <button><img src={CommentIcon} alt="Save" /></button>
      </div>
      <div className="detail-card-text">
      <h2>{title || "Detail Card"}</h2>
      </div>
      <p>{description}</p>
      <p>ID: {id}</p>
    </div>
  );
}

export default DetailCard;
