import { useParams } from "react-router";
import { useProductos } from "../contexts/ProductosContext.jsx";

const Producto = () => {
  const { productoId } = useParams();
  const { productos } = useProductos();

  const item = productos.find((prod) => prod.id === Number(productoId));
  return (
    <div>
      <h2>Producto {productoId}</h2>

      <img sec={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default Producto;
