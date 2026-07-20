import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div id="Layout">
      <Header />

      <Outlet />

      <footer>
        <p>&copy; 2026 Tienda Digital. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Tienda Digital</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
        <Link to={"carrito"}>Carrito</Link>
      </nav>
    </header>
  );
};

export default Layout;
