import {outlet} from "react-router";

const Layout = () => {
    return ( 
        <>
            <header>
                <h1>tienda digital</h1>
            </header>

            <outlet />

            <footer>
                <p>&copy; 2026 Tienda Digital. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};