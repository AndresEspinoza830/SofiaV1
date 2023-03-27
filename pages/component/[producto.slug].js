import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { obtenerProductoPagina } from "../../utils/wooCommerceApi";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import pors from "../../public/default.png";

const producto = ({ producto, agregarCarrito, eliminarProducto, carrito }) => {
  const [cantidad, setCantidad] = useState(1);

  producto.map(
    (p) => (p.description = p.description.replace(/(<([^>]+)>)/gi, ""))
  );

  const product = producto[0];
  console.log(product);

  const handleCarrito = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no valida");
      return;
    }

    //Agregar al carrito
    const guitarraSeleccionada = {
      id: product.id,
      name: product.name,
      price: product.regular_price,
      // image: product.Images,
      cantidad: cantidad,
      sku: product.sku,
      item: "item",
    };

    agregarCarrito(guitarraSeleccionada);
    toast.success("Agregado al pedido");
  };

  console.log(carrito);

  return (
    <>
      <Navbar carrito={carrito} eliminarProducto={eliminarProducto} />
      <div className="max-w-[1320px] px-2 md:px-10 py-8 mx-auto">
        <div className="w-full md:mx-2">
          <div>
            <a href="/menu" className="flex items-center my-2">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                width={25}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M807.313723 464.738462H300.165908l197.151507-198.340924a31.507692 31.507692 0 1 0-44.693661-44.425846l-250.549169 252.061539c-0.291446 0.291446-0.488369 0.638031-0.764062 0.937354a31.452554 31.452554 0 0 0-3.111385 3.828184c-0.543508 0.8192-0.9216 1.701415-1.386338 2.552123-0.512 0.945231-1.079138 1.858954-1.496615 2.859323-0.441108 1.063385-0.701046 2.174031-1.016123 3.2768-0.252062 0.866462-0.590769 1.701415-0.764062 2.599385a31.484062 31.484062 0 0 0 0 12.319508c0.181169 0.897969 0.512 1.725046 0.764062 2.591507 0.322954 1.102769 0.575015 2.213415 1.016123 3.2768 0.417477 1.000369 0.984615 1.906215 1.496615 2.851447 0.464738 0.858585 0.842831 1.7408 1.394215 2.56 0.913723 1.370585 1.992862 2.615138 3.111385 3.828184 0.275692 0.299323 0.472615 0.645908 0.764062 0.937354l250.549169 252.061538a31.405292 31.405292 0 0 0 22.346831 9.29477 31.515569 31.515569 0 0 0 22.34683-53.720616L300.165908 527.753846h507.147815a31.507692 31.507692 0 0 0 0-63.015384z"
                  fill=""
                />
              </svg>
              <p className="font-medium">Back</p>
            </a>
            <h2 className="text-[#052617] text-3xl font-extrabold mb-6 font-philo">
              {product.name}
            </h2>
          </div>
          <div className="flex flex-col-reverse md:flex-row w-full">
            <form className="w-full md:w-3/5 mr-2" onSubmit={handleCarrito}>
              <h3 className="font-philo font-bold text-xl mb-2">Description</h3>
              <p className="font-philo text-xl text-[#555555] mb-5">
                {product.description}
              </p>

              <div className="flex items-center mb-5">
                <h3 className="font-philo font-bold text-xl mb-2">Quantity</h3>
                <div className="flex flex-row h-10 rounded-lg relative bg-transparent ml-4">
                  <select
                    className="w-24 text-center bg-gray-200 shadow-md shadow-inherit"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                  >
                    <option value="">--Seleccione--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <h3 className="font-philo font-bold text-xl mb-4">
                NOTES FOR THER KITCHEN
              </h3>
              <div className="flex flex-col mb-5">
                <input
                  type="text"
                  id="mensaje"
                  className="bg-transparent border border-gray-500 h-[100px] outline-offset-0 rounded-lg text-black px-8 py-3 focus:outline-none"
                />
                {/* <label
                  htmlFor="mensaje"
                  className="font-philo font-light text-sm"
                >
                  Máximo 30 caracteres
                </label> */}
              </div>
              <h3 className="font-philo font-extrabold text-4xl mb-8 text-[#052617]">
                ${product.price}
              </h3>
              <input
                className="bg-[#052617] hover:bg-[#0c5836] transition duration-500 hover:shadow-md text-[#D9BF73] w-full py-3 rounded-lg font-philo text-xl font-bold text-center cursor-pointer"
                value="ADD TO CART"
                type="submit"
              />
            </form>
            <div>
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={product?.images[0]?.src}
              ></img>
            </div>
          </div>
        </div>
        {/* <div className="w-full md:mx-2 mt-12">
        <h3 className="font-philo font-bold text-xl mb-4">
          Tambien te puede interesar
        </h3>
        <div className="flex justify-between">
          {idscross !== []
            ? idcross.map((cross) => (
                <Cross
                  key={cross.id}
                  cross={cross}
                  agregarCarrito={agregarCarrito}
                />
              ))
            : ""}
        </div>
      </div> */}
      </div>

      <ToastContainer autoClose={2000} />
      <Footer />
    </>
  );
};

export default producto;

export async function getServerSideProps({ query }) {
  const slug = Object.values(query)[0];
  console.log(slug);

  const productosWoo = await obtenerProductoPagina(slug).catch((error) =>
    console.error(error)
  );

  //   console.log(productosWoo);

  return {
    props: {
      producto: productosWoo.data,
    },
  };
}
