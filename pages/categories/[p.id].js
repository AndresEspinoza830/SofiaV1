import Link from "next/link";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import { obtenerProductosCategoria } from "../../utils/wooCommerceApi";
import ImagenDefault from "../../assets/descarga.jpg";

const name = ({ productos, carrito, eliminarProducto }) => {
  productos.map(
    (p) => (p.description = p.description.replace(/(<([^>]+)>)/gi, ""))
  );

  console.log(productos);

  return (
    <>
      <Navbar carrito={carrito} eliminarProducto={eliminarProducto} />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 min-h-[400px] flex flex-col justify-between rounded-lg"
            >
              <div className="px-2">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={`${
                    producto?.images[0]?.src
                      ? producto?.images[0]?.src
                      : ImagenDefault
                  } }`}
                ></img>
                <h2 className="my-2 font-philo text-[#052617] uppercase">
                  {producto.name}
                </h2>
                <h2 className="text-xl text-[#052617] font-bold">
                  ${producto.price}
                </h2>
                <p className="font-normal my-2 my-custom-style ">
                  {producto.description || (
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quae, quasi!{" "}
                    </p>
                  )}
                </p>
              </div>

              <Link
                href={`/component/${producto.slug}`}
                className="self-end font-philo text-center bg-[#052617] w-full text-[#D9BF73] py-3 rounded-md hover:bg-[#0c5836] duration-1000 uppercase mb-4"
              >
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default name;

export async function getServerSideProps({ query }) {
  const ruta = Object.values(query)[0];
  console.log(ruta);

  const productosCategoria = await obtenerProductosCategoria(ruta).catch(
    (error) => console.error(error)
  );

  return {
    props: {
      productos: productosCategoria.data,
    },
  };
}
