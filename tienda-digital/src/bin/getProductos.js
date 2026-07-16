const URL_API = "https://fakestoreapi.com/products";
export default function getProductos() {
try {
    const res = await fetch(URL_API);
    const data = await res.json();
    console.log(data);

} catch (error) {
return -1;

}
}