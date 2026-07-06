# Tienda-digital-React

Práctica de tienda digital (e-commerce) usando react.

## 1. Prerequisitos

### 1.1 Fork

Cada alumno deberá crear su propia derivación de este repositorio para trabajar.

![alt text](./assets/image.png)

y clonarlo en su propio equipo.

### 1.2 Inicializar el proyecto React

Dentro del repositorio inicializar el proyecto React.

```sh
pnpm create vite
# > React
# > Javascript
```

- Limpiar estilos `/src/styles.css`, `/src/app.css`
- Limpiar `/src/App.js` (eliminar el html)

```
src/
├─ components/
│  └─ Layout.jsx
├─ contexts/
│  └─ ProductosContext.jsx
├─ pages/ 
│  ├─ Carrito.jsx
│  ├─ Home.jsx
│  └─ Product.jsx
├─ styles.css
├─ App.jsx
└─ main.jsx
```


### 1.3 Instalación de dependencias

- [react-router (declarative mode)](https://reactrouter.com/start/declarative/installation)

## 2. Desarrollo

**Contenido**

- [2.1 Configuración Layout](#21-configuración-de-layout)
- [2.2 Configuración de rutas iniciales](#22-configuración-de-rutas-iniciales)
- [2.3 Página inicial: Listado de productos](#23-página-inicial-listado-de-productos)
- [2.4 Página de producto](#24-página-de-producto)
- [2.5 Carrito](#25-carrito)
- [2.6 Configuración de conexto global](#26-configuración-de-conexto-global)


### 2.1 Configuración de Layout

Crear componente `Layout.jsx` que contenga un elemento **header** y **footer** (simplemente etiquetas `<h2>`).

### 2.2 Configuración de rutas iniciales

Configurar ruta de Layout en `App.jsx`

- Layout para toda la página.
- Ruta por defecto a `Home.jsx` (crear `Home.jsx`).
- Ruta 404 not found (crear `404.jsx`)

```html
<Route element={<Layout />}>
    <Route element={<Home />} />
    <Route path="*" element={<NotFound />} />
</Route>
```

### 2.3 Página inicial: Listado de productos

Crear página `/src/pages/Home.jsx` donde se listarán todos los productos. Configurar estados de productos.

```js
const [produtos, setProductos] = useState([])
```

Preparar para listar `productos`.

```jsx
{productos.map(producto) => (
    <div key={producto.id}>
        <p>{producto.title}</p>
    </div>
)}
```

### 2.4 Página de producto

Crear componente `/src/pages/Producto.jsx`

### 2.5 Carrito

Crear componente `/src/pages/Carrito.jsx`

### 2.6 Configuración de conexto global

Crear componente `/src/context/ProductoContext.jsx`

```jsx
const ProductoContext = createContext(undefined);

export const ProductoProvider = ({ children }: { children: React.ReactNode }) => {
    const [produtos, setProductos] = useState([])

    return (
        <ProductoContext.Provider value={{productos, setProductos}}>
            { children }
        </ProductoContext.Provider>
    )
}

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context)
    throw new Error('useProducto must be used inside ProductoProvider');

  return context;
};
```

## 3. Utilidades

- [Fake Store Api](https://fakestoreapi.com/docs)
- [React - Hooks, estados y sincronización](https://docs.google.com/presentation/d/19TBGP7ie8EiejvCh9Nyjrjw6moQ9Vyoi3_p9XzQSVR0/edit?slide=id.p#slide=id.p)
- [React - Funciones y métodos comunes](https://docs.google.com/presentation/d/1T3TuTvGGiaIA2NGQD-0co6fm26sEk8jS74eFM-wml14/edit?slide=id.p#slide=id.p)