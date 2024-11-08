import HomeSearchBar from "./HomeSearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>
        <i className="bi bi-bag"></i>
      </h1>
      <h1>Bazar Online</h1>
      <HomeSearchBar />
    </div>
  );
};

export default Home;
