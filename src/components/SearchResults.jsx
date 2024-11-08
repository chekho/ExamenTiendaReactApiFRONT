import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./SearchResults.css";
import HomeSearchBar from "./HomeSearchBar";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get("search");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://examen-tienda-react-api.vercel.app/api/items?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setResults(data);
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los resultados de la búsqueda:", error);
        setResults([]);
      });
  }, [query]);

  return (
    <div className="container">
      <div className="bag">
        <i className="bi bi-bag"></i>
      </div>
      <div className="homesearch">
        <HomeSearchBar />
      </div>
      <div className="search-results">
        <h3 className="h3r">Resultados de búsqueda para: {query}</h3>
        <p>Número de resultados: {results.length}</p>
        <div className="results-grid">
          {results.map((item) => (
            <Link
              to={`/item/${item._id}`}
              key={item._id}
              className="product-card"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-title">{item.title}</h2>
                <p className="product-category">{item.category}</p>
                <p className="product-description">{item.description}</p>
                <p className="product-price">Precio: ${item.price}</p>
                <p className="product-rating">{item.rating} / 5</p>
                <p className="product-stock">Stock: {item.stock}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
