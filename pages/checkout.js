import { useState, useEffect, CSSProperties } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Layout/Navbar";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import pruebaNuevo from "../public/prueba.jpg";
import { useRouter } from "next/router";
import MoonLoader from "react-spinners/MoonLoader";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import Footer from "../components/Layout/Footer";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
};

const checkout = ({
  carrito,
  eliminarProducto,
  limpiarCarrito,
  actualizarCantidad,
}) => {
  const [total, setTotal] = useState(0);
  const [pickup, setPickup] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [open, setOpen] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(5);
  const [pending, setPending] = useState(false);
  const [finish, setFinish] = useState(false);
  const router = useRouter();
  const query = router.query;

  const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  const [listo, setListo] = useState(true);

  const prueba = carrito.map((p) => {
    return p.sku;
  });

  const line_items = carrito.map((producto) => ({
    product_id: producto.id,
    quantity: producto.cantidad,
  }));

  const handlerPick = () => {
    setOrderType("65NB3RKY023AJ");
    setPickup(true);
    setDelivery(false);
  };

  const handlerDelivery = () => {
    setOrderType("NT1CCC2KTP09W");
    setDelivery(true);
    setPickup(false);
  };

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.price,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setFinish(false);
    setPending(true);
    const {
      nombre,
      apellido,
      direccion,
      telefono,
      city,
      state,
      postcode,
      correo,
      direccionb,
    } = data;

    const dataClover = [
      nombre,
      apellido,
      direccion,
      telefono,
      city,
      state,
      postcode,
      correo,
      direccionb,
    ];

    const info = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: nombre,
        last_name: apellido,
        address_1: direccion,
        address_2: direccion,
        city: city,
        state: state,
        postcode: postcode,
        country: "US",
        email: correo,
        phone: telefono,
      },
      shipping: {
        first_name: nombre,
        last_name: apellido,
        address_1: direccionb,
        address_2: direccionb,
        city: city,
        state: state,
        postcode: postcode,
        country: "US",
      },
      line_items: line_items,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "0",
        },
      ],
    };

    //FETCH WORDPRESS...
    const response = await fetch("api/create-order", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resul = await response.json();
    console.log(resul);

    const arregloNuevoClover = [carrito, dataClover];

    const optionsClover = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_MID}`,
      },
      body: JSON.stringify([orderType]),
    };

    //FETCH CREATE ORDER-CLOVER...
    const responseClover = await fetch("api/order-clover", optionsClover);
    const resulClover = await responseClover.json();
    const idOrder = resulClover.id;
    console.log(idOrder);

    const optionsCustomer = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_MID}`,
      },
      body: JSON.stringify(dataClover),
    };

    //FETCH CREATE CUSTOMER...
    const responseCustomer = await fetch(
      "api/create-customer",
      optionsCustomer
    );
    const resultCustomer = await responseCustomer.json();
    const idCustomer = resultCustomer.id;
    console.log(idCustomer);

    //ACTUALIZAR CUSTOMER
    const actualizarCustomer = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_MID}`,
      },
      body: JSON.stringify({ idOrder, idCustomer }),
    };

    const responseActualizarCustomer = await fetch(
      "api/actualizar-customer",
      actualizarCustomer
    );
    const resultActualizarCustomer = await responseActualizarCustomer.json();
    console.log(resultActualizarCustomer);

    //ACTUALIZAR ITEMS
    const ids = [idOrder, idCustomer];
    const bodyItems = [carrito, ids];

    const actualizarItems = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_MID}`,
      },
      body: JSON.stringify(bodyItems),
    };

    const responseActualizarItems = await fetch(
      "api/actualizar-items",
      actualizarItems
    );
    const resultActualizarItems = await responseActualizarItems.json();
    console.log(resultActualizarItems);

    limpiarCarrito();
    setPending(false);
    setFinish(true);
  };

  return (
    <div className="relative">
      <Navbar carrito={carrito} eliminarProducto={eliminarProducto} />
      <div className="w-full mx-auto max-w-[1360px] py-10 flex">
        {finish ? (
          <div className="flex flex-col w-full justify-center items-center space-y-3">
            <h2 className="font-bold text-2xl  text-center">
              Orden generada con exito!
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <path
                fill="#bae0bd"
                d="M40,77.5C19.3,77.5,2.5,60.7,2.5,40S19.3,2.5,40,2.5S77.5,19.3,77.5,40S60.7,77.5,40,77.5z"
              />
              <path
                fill="#5e9c76"
                d="M40,3c20.4,0,37,16.6,37,37S60.4,77,40,77S3,60.4,3,40S19.6,3,40,3 M40,2C19,2,2,19,2,40s17,38,38,38 s38-17,38-38S61,2,40,2L40,2z"
              />
              <path
                fill="#fff"
                d="M34 56L20.2 42.2 24.5 38 34 47.6 58.2 23.4 62.5 27.6z"
              />
            </svg>

            <Link className="text-center text-[#052617]" href="/">
              Regresar al Home
            </Link>
          </div>
        ) : (
          <>
            <div className="w-1/2">
              <div>
                <a href="/carrito" className="flex items-center my-2">
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
                  <p className="font-medium">Atrás</p>
                </a>
              </div>
              {pending ? (
                // <Modal open={open} className="p-6 w-full h-screen " center>
                <div className="w-full flex items-center justify-center">
                  <MoonLoader
                    color={"#36d7b7"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                /* </Modal> */
                <>
                  <h2 className=" text-2xl block">Checkout</h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="space-y-4 px-3 py-2"
                  >
                    <div className="w-full flex space-x-6">
                      <div>
                        <label>Nombre</label>
                        <input
                          type="text"
                          className="block bg-[#f2f2f2] p-2"
                          placeholder="Nombre"
                          {...register("nombre", {
                            required: true,
                            maxLength: 16,
                          })}
                        />
                        {errors.nombre?.type === "required" && (
                          <p className="text-red-600 font-medium">
                            El nombre es obligatorio
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                          type="text"
                          className="block bg-[#f2f2f2] p-2"
                          id="apellido"
                          placeholder="Apellido"
                          {...register("apellido", {
                            required: true,
                            maxLength: 20,
                          })}
                        />
                        {errors.apellido?.type === "required" && (
                          <p className="text-red-600 font-medium">
                            El apellido es obligatorio
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">Correo</label>
                      <input
                        type="email"
                        className="block w-full bg-[#f2f2f2] p-2"
                        id="email"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        })}
                      />
                      {errors.correo?.type === "pattern" && (
                        <p className="text-red-600 font-medium">
                          El correo no es valido
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefono">Telefono</label>
                      <input
                        type="text"
                        className="block w-full bg-[#f2f2f2] p-2"
                        id="telefono"
                        placeholder="Telefono"
                        {...register("telefono", {
                          required: true,
                        })}
                      />
                      {errors.telefono?.type === "pattern" && (
                        <p className="text-red-600 font-medium">
                          El telefono no es valido
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="direccion">Direccion</label>
                      <input
                        type="text"
                        className="block w-full bg-[#f2f2f2] p-2"
                        id="direccion"
                        placeholder="Direccion"
                        {...register("direccion", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        onClick={handlerPick}
                        className={`${
                          delivery ? "disabled" : ""
                        }bg-[#f2f2f2] px-6 py-3 rounded-md hover:scale-105 duration-200`}
                      >
                        Pickup
                      </button>
                      <p>OR</p>
                      <button
                        onClick={handlerDelivery}
                        className={`${
                          pickup ? "disabled" : ""
                        } bg-[#f2f2f2] px-6 py-3 rounded-md hover:scale-105 duration-200`}
                      >
                        Delivery
                      </button>
                    </div>
                    {pickup ? (
                      <>
                        <div className="flex justify-between">
                          <div>
                            <label htmlFor="city">City</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="city"
                              placeholder="City"
                              {...register("city", {
                                required: true,
                              })}
                            />
                          </div>
                          <div>
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="state"
                              placeholder="State"
                              {...register("state", {
                                required: true,
                              })}
                            />
                          </div>
                          <div>
                            <label htmlFor="postcode">PostCode / ZIP</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="postcode"
                              placeholder="Code"
                              {...register("postcode", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="informacion">
                            Additional information
                          </label>
                          <textarea
                            type="text"
                            className="block w-full bg-[#f2f2f2] p-2"
                            id="informacion"
                            placeholder="Maximo 30 caracteres"
                            {...register("mensaje", {
                              required: false,
                              maxLength: 30,
                            })}
                          />
                          {errors.mensaje?.type === "maxLength" && (
                            <p className="text-red-600 font-medium">
                              Limite sobrepasado
                            </p>
                          )}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {delivery ? (
                      <>
                        <h2>Shipping</h2>
                        <div>
                          <label htmlFor="direccionb">Direccion</label>
                          <input
                            type="text"
                            className="block w-full bg-[#f2f2f2] p-2"
                            id="direccionb"
                            placeholder="Direccion"
                            {...register("direccionb", {
                              required: true,
                            })}
                          />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <label htmlFor="city">City</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="city"
                              placeholder="City"
                              {...register("city", {
                                required: true,
                              })}
                            />
                          </div>
                          <div>
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="state"
                              placeholder="State"
                              {...register("state", {
                                required: true,
                              })}
                            />
                          </div>
                          <div>
                            <label htmlFor="postcode">PostCode / ZIP</label>
                            <input
                              type="text"
                              className="block w-full bg-[#f2f2f2] p-2"
                              id="postcode"
                              placeholder="Code"
                              {...register("postcode", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="informacion">
                            Additional information
                          </label>
                          <textarea
                            type="text"
                            className="block w-full bg-[#f2f2f2] p-2"
                            id="informacion"
                            placeholder="Maximo 30 caracteres"
                            {...register("mensaje", {
                              required: false,
                              maxLength: 30,
                            })}
                          />
                          {errors.mensaje?.type === "maxLength" && (
                            <p className="text-red-600 font-medium">
                              Limite sobrepasado
                            </p>
                          )}
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <input
                      type="submit"
                      className="bg-black text-white font-bold w-full p-2 cursor-pointer"
                      value="Place Order"
                      onClick={onOpenModal}
                    />
                  </form>
                </>
              )}
            </div>
            {pending ? (
              ""
            ) : (
              <div className="w-1/2 ml-7 flex flex-col">
                <div className="order-2">
                  <div className="w-full px-4 py-4 rounded-md">
                    <h2 className="text-md mb-4">RESUMEN DEL PEDIDO</h2>
                    <p className=" font-bold py-1">Subtotal: ${total}</p>
                    <p className=" font-bold py-1">Descuento: -0.00</p>
                    <p className="mb-4 font-bold  py-4">
                      Total a pagar: ${total}
                    </p>
                  </div>
                </div>

                <table className="w-full order-1">
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((producto) => (
                      <tr key={producto.id}>
                        <td>
                          <Image
                            src={pruebaNuevo}
                            alt={producto.name}
                            width={150}
                            height={150}
                          />
                        </td>
                        <td className="text-center">{producto.name}</td>
                        <td>
                          <select
                            className="w-24 text-center"
                            onChange={(e) =>
                              actualizarCantidad({
                                id: producto.id,
                                cantidad: e.target.value,
                              })
                            }
                            value={producto.cantidad}
                          >
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
                        </td>
                        <td>{producto.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
      {finish ? "" : <Footer />}
    </div>
  );
};

export default checkout;
