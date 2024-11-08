import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://examen-tienda-react-api.vercel.app/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error al obtener los detalles del producto:", error)
      );
  }, [id]);

  const handlePurchase = () => {
    fetch("https://examen-tienda-react-api.vercel.app/api/addSale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          // Verifica si la respuesta es true
          alert("Compra realizada con éxito");
        } else {
          alert("Error al realizar la compra");
        }
      })
      .catch((error) => console.error("Error al realizar la compra:", error));
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index + 1}`}
            className="product-image"
          />
        ))}
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="product-category">{product.category}</p>
        <p className="product-descriptions">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">Rating: {product.rating} / 5</p>

        <button className="buy-button" onClick={handlePurchase}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
