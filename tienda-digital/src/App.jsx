import { route, routes} from "react-router";
import Layout from "./components/Layout";
import home from "./pages/Home";

function App() {
 

  return (
    <>
    <routes>
      <route element={<Layout />}>
      <route index element={<Home />} />

      <route path="/about" element={<h2>About</h2>} />
      </route>
      <h1>Tienda digital</h1>
      </routes>
    </>
  )
}

export default App
