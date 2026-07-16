import { useState } from "react";

const Home = () => {
    const [productos, setProductos] = useState([]);
    return (
        <div>
            <h2>Home</h2>

            {productos.map((producto) => (
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <img src={producto.image} alt={producto.title} />
                </div>
            ))}
        </div>
    );
};

export default Home