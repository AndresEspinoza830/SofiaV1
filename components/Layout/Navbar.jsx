import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/sofia.png";
import prueba from "../../public/default.png";

const Navbar = ({ carrito, eliminarProducto, pedido }) => {
  const [cart, setCart] = useState(false);
  const [hamburguer, setHamburguer] = useState(false);

  const mostrarCarrito = () => {
    setCart(!cart);
  };

  const mostrarHamburguesa = () => {
    setHamburguer(!hamburguer);
  };

  console.log(pedido);
  console.log(carrito);

  return (
    <div className="">
      <div
        className={`${
          cart ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 fixed left-0 top-0 w-full h-screen z-10 bg-black/70`}
      >
        <div className="fixed right-0 pt-[50px] top-0 w-[75%] sm:w-[60%] md:w-[28%] bg-white h-screen shadow-m p-2 transition-all ease-in-out duration-500 ">
          <div className="flex justify-end mb-4">
            <svg
              width={20}
              className="cursor-pointer flex justify-end"
              onClick={() => setCart(false)}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                fill=""
              />
              <path
                d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                fill=""
              />
              <path
                d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                fill=""
              />
              <path
                d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                fill=""
              />
              <path
                d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                fill=""
              />
              <path
                d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                fill=""
              />
              <path
                d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                fill=""
              />
              <path
                d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                fill=""
              />
            </svg>
          </div>
          {carrito.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <>
              <table className="w-full mb-4 z-50">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody className="">
                  {carrito.map((p) => (
                    <tr key={p.id} className="text-center">
                      <td className="flex justify-center items-center">
                        <Image
                          alt="Placeholder"
                          className="block h-auto w-[70px]"
                          src={p.image ?? prueba.src}
                        />
                        <svg
                          width={10}
                          className="cursor-pointer absolute right-3 fill-red-500"
                          onClick={() => eliminarProducto(p.id)}
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                            fill=""
                          />
                          <path
                            d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                            fill=""
                          />
                          <path
                            d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                            fill=""
                          />
                          <path
                            d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                            fill=""
                          />
                          <path
                            d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                            fill=""
                          />
                          <path
                            d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                            fill=""
                          />
                          <path
                            d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                            fill=""
                          />
                          <path
                            d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                            fill=""
                          />
                        </svg>
                      </td>
                      <td>{p.cantidad}</td>
                      <td>{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full">
                <h3 className="font-philo mb-4">Subtotal:</h3>
                <Link
                  href="/carrito"
                  className="bg-[#052617] text-white font-philo block text-center py-2"
                >
                  Go to Cart
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-black w-full py-4 px-2 md:px-0">
        <h3 className="font-extrabold text-xl  border-white text-white uppercase text-center">
          Atencion en New Jersey *
        </h3>
        <h3 className="font-extrabold text-xl  border-white text-white uppercase text-center">
          Delivery: Mon - Sun: 11:00 AM - 9:45 PM
        </h3>
      </div>
      <div className="w-full py-1 shadow-lg z-98">
        <div className="flex justify-between items-center w-full px-10 2xl:px-20">
          <Link href="/">
            <Image src={logo} width={100} alt="Logo" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-10 text-black">
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/">
                  Home
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/contact">
                  About us{" "}
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/menu">
                  Menu
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/menu">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex relative h-full">
            <div className="w-6 h-6 bg-red-500 font-medium top-[-8px] left-[73px] text-white absolute rounded-full m-auto flex justify-center items-center">
              {carrito.length || "0"}
            </div>
            <Link href="tel:937498630" className="mr-4">
              <Image src="/phone3.png" className="w-[40px] h-[30]" alt="" />
            </Link>
            {/* <Link href="/carrito"> */}
            <svg
              viewBox="0 0 1024 1024"
              width={32}
              onClick={mostrarCarrito}
              className="mr-8 cursor-pointer"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M781.851307 974.093653a77.858133 77.858133 0 0 1-31.73376-6.690133 84.186453 84.186453 0 0 1-44.36992-44.352853 79.947093 79.947093 0 0 1 0-63.484587 86.859093 86.859093 0 0 1 18.568533-26.545493 79.486293 79.486293 0 0 1 26.17344-17.250987 84.107947 84.107947 0 0 1 32.1024-6.321493 88.1152 88.1152 0 0 1 32.853333 6.321493 77.85472 77.85472 0 0 1 26.54208 17.08032 86.81472 86.81472 0 0 1 18.55488 26.528427 79.803733 79.803733 0 0 1 0 63.484586 86.685013 86.685013 0 0 1-18.55488 26.54208 84.944213 84.944213 0 0 1-26.733226 18.56512 82.2784 82.2784 0 0 1-33.40288 6.12352z m-442.484054-2.22208a81.083733 81.083733 0 0 1-32.863573-6.690133 84.466347 84.466347 0 0 1-44.352853-44.36992 79.762773 79.762773 0 0 1 0-63.46752 86.685013 86.685013 0 0 1 18.56512-26.545493 79.274667 79.274667 0 0 1 26.159786-17.26464 86.951253 86.951253 0 0 1 33.21856-6.30784 83.899733 83.899733 0 0 1 32.119467 6.30784 79.435093 79.435093 0 0 1 26.17344 17.26464 87.1936 87.1936 0 0 1 18.558293 26.34752 79.872 79.872 0 0 1 0 63.501653 84.25472 84.25472 0 0 1-44.356266 44.352853 78.158507 78.158507 0 0 1-33.221974 6.87104z m521.741654-225.529173H303.168853a47.34976 47.34976 0 0 1-26.53184-6.864213 64.884053 64.884053 0 0 1-18.561706-20.043094 136.656213 136.656213 0 0 1-13.738667-29.883733 289.798827 289.798827 0 0 1-9.284267-33.235627c0-3.898027-2.594133-14.2848-5.92896-30.798506-3.341653-16.51712-7.04512-37.12-11.690666-61.057707l-15.418027-81.861973-17.08032-90.944854c-13.349547-71.03488-28.583253-150.592853-45.66016-238.70464l-2.594133-13.16864H43.874987a27.33056 27.33056 0 0 1-16.889174-4.642133 53.691733 53.691733 0 0 1-13.554346-14.66368 58.108587 58.108587 0 0 1-7.424-18.561707A99.62496 99.62496 0 0 1 3.413333 80.93696a30.651733 30.651733 0 0 1 9.458347-22.644053 33.037653 33.037653 0 0 1 24.13568-8.349014h111.36a61.320533 61.320533 0 0 1 26.17344 4.819627 41.796267 41.796267 0 0 1 14.46912 11.322027 47.104 47.104 0 0 1 7.994027 14.660266c2.092373 6.560427 3.826347 12.253867 5.19168 17.08032 1.11616 4.631893 2.420053 12.24704 3.710293 21.7088 1.303893 9.468587 2.792107 20.790613 4.27008 31.361707 1.491627 10.584747 4.63872 26.545493 6.690133 41.40032l2.034347 13.919573h742.437547a94.365013 94.365013 0 0 1 38.61504 4.635307 37.123413 37.123413 0 0 1 16.520533 13.359787 28.347733 28.347733 0 0 1 4.082347 16.151893 68.031147 68.031147 0 0 1-2.966187 18.561707c-2.106027 6.311253-6.690133 19.3024-13.738667 38.976853a6111.45728 6111.45728 0 0 0-23.002453 65.518933l-24.517973 70.71744a11156.288853 11156.288853 0 0 1-19.67104 55.68512 110.114133 110.114133 0 0 1-29.51168 51.971414 64.068267 64.068267 0 0 1-41.5744 12.997973H288.512l19.851947 128.24576h551.263573c32.105813 0 34.88768 13.55776 34.88768 27.2896a51.746133 51.746133 0 0 1-7.60832 28.583253c-3.15392 4.826453-10.758827 7.420587-22.463147 7.420587h-3.33824v0.01024zM279.04 490.390187l581.137067 1.11616 84.640426-224.034134-709.208746-2.225493 43.431253 225.143467z" />
            </svg>
            {/* </Link> */}
            <button className="border-2 hidden md:block font-abc font-philo text-lg border-black bg-transparent hover:border-[#D9BF73] hover:text-[#D9BF73] rounded-sm py-2 px-6 duration-300">
              Mis Ordenes
            </button>

            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden cursor-pointer"
              onClick={mostrarHamburguesa}
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`${
          hamburguer ? "-translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 fixed left-0 top-0 w-full h-screen z-10`}
      >
        <div className="fixed letf-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-white p-3 ease-in duration-200">
          <div className="flex w-full items-center justify-between">
            <Image src="/logo.jpeg" width={80} alt="" />
            <div>
              <svg
                width={20}
                className="cursor-pointer flex justify-end"
                onClick={mostrarHamburguesa}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                  fill=""
                />
                <path
                  d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                  fill=""
                />
                <path
                  d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                  fill=""
                />
                <path
                  d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                  fill=""
                />
                <path
                  d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                  fill=""
                />
                <path
                  d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                  fill=""
                />
                <path
                  d="M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z"
                  fill=""
                />
                <path
                  d="M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z"
                  fill=""
                />
              </svg>
            </div>
          </div>
          <div className="py-4 flex flex-col h-full items-start">
            <ul className="w-full h-full flex flex-col space-y-24 items-center">
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/">
                  Home
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/contact">
                  About us{" "}
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/menu">
                  Menu
                </Link>
              </li>
              <li className="font-philo text-lg hover:text-[#D9BF73] duration-300">
                <Link className="font-abc text-2xl" href="/menu">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-screen bg-black/70 z-9 ${
          hamburguer ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 fixed left-0 top-0`}
      ></div>
    </div>
  );
};

export default Navbar;
