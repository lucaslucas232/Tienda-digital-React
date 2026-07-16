import {Outlet} from "react-router";

const Layout = () => {
    return ( 
        <>
            <header>
                <h1>tienda digital</h1>
            </header>

            <Outlet />

            <footer>
                <p>&copy; 2026 Tienda Digital. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};
export default Layout