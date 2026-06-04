import TopBar from "../components/ui/layout/TopBar"
import DetailCard from "../components/cards/DetailCard"
import OutdoorIcon from "/src/assets/icons/Kategori/outdoor-clean-icon.svg";
import Rideturimage from "/src/assets/images/recentlyvisited/ridetur-recently-visited.png";


function DetailPage() {
  return (
    <>
      <div className="detail-page">
        <div className="detail-card-container">
        <TopBar
          title={"Ridetur"}
          showLeftIcon={false}
          showRightIcon={false}
          onLeftIconClick= {() => {}}
          onRightIconClick={() => {}}
        />
        <DetailCard
          image={Rideturimage}
          title={"Ridetur"}
          description={"En fantastisk ridetur i Bolivia."}
          category={OutdoorIcon}
          location={"Bolivia"}
        />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
