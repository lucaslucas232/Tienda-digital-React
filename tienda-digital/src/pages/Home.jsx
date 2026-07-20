import { useProducto } from "../contexts/ProductosContext.jsx";
import { useState } from "react";

const Home = () => {
  const { productos } = useProducto();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome</h2>

      <div className="contenedor-columnas">
        {productos.map((producto) => (
          <div key={producto.id} className="columna">
            <p>{producto.title}</p>
            <img
              src={producto.image}
              alt={producto.title}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
