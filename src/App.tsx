import "./App.css";
import SmallCard from "./components/cards/SmallCard";
import TopBar from "./components/ui/layout/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
        <SmallCard />
        <SmallCard />
      </div>
    </>
  );
}

export default App;
