import './CartItem.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CarItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className='Contenedor-Item'>
        <div className="CartItem">
        <p>Producto: {name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
        <p>SubTotal: ${price * quantity}</p>
        <button onClick={handleRemoveItem}>Eliminar</button>
        </div>
    </div>
  );
};

export default CarItem;
