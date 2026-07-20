import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Producto from "./pages/Producto";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="about" element={<About />} />
          <Route path="producto/:productoId" element={<Producto />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
