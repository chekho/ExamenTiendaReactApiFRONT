import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sales.css";

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch sales data
    fetch("https://examen-tienda-react-api.vercel.app/api/sales")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Fetch product details for each sale
          const productDetailsPromises = data.map((sale) => {
            return fetch(
              `https://examen-tienda-react-api.vercel.app/api/items/${sale.itemId}`
            )
              .then((response) => response.json())
              .then((product) => ({
                ...sale,
                productTitle: product.title,
                thumbnail: product.thumbnail,
              }));
          });

          // Wait for all product details to be fetched
          Promise.all(productDetailsPromises).then((salesWithDetails) => {
            setSales(salesWithDetails);
          });
        } else {
          setError("Unexpected data format");
          setSales([]); // or you can decide how to handle unexpected data
        }
      })
      .catch((error) => {
        setError(error.message);
        setSales([]);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Compras Registradas</h1>
      {sales.length > 0 ? (
        sales.map((sale, index) => (
          <Link to={`/item/${sale.itemId}`} key={index} className="sale-card">
            <img
              src={sale.thumbnail}
              alt={sale.productTitle}
              className="sale-image"
            />
            <div className="sale-info">
              <h2>{sale.productTitle}</h2>
              <p>Fecha: {sale.date}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No hay ventas registradas.</p>
      )}
    </div>
  );
};

export default Sales;
