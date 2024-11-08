import { useNavigate } from "react-router-dom";
import "./salesbutton.css";

const SalesButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/sales");
  };

  return (
    <div>
      {/* Otro contenido de tu componente */}
      <button className="floating-button" onClick={handleButtonClick}>
        <i className="bi bi-currency-dollar"></i>
      </button>
    </div>
  );
};

export default SalesButton;
