import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSerchBar.css";

const HomeSearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/items?search=${query}`);
    }
  };

  return (
    <div className="containerHSB">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="search-buttons">
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default HomeSearchBar;
