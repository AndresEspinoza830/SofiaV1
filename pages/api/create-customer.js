export default async function handler(req, res) {
  try {
    const arrFormulario = req.body;

    const [
      nombre,
      apellido,
      direccion,
      telefono,
      city,
      state,
      postcode,
      correo,
      direccionb,
    ] = arrFormulario;

    const data = await fetch(
      ` https://sandbox.dev.clover.com/v3/merchants/${process.env.NEXT_MID}/customers`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: ` Bearer ${process.env.NEXT_TOKEN}`,
        },
        body: JSON.stringify({
          id: "",
          firstName: nombre,
          lastName: apellido,
          marketingAllowed: true,
          customerSince: 0,
          addresses: [
            {
              address1: direccion,
              address2: direccionb,
              city: city,
              country: "US",
              state: state,
              zip: postcode,
            },
          ],
        }),
      }
    );
    const datas = await data.json();
    res.json(datas);
  } catch (error) {
    console.log(error);
  }
}
