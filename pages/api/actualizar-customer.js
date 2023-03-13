export default async function handler(req, res) {
  try {
    const { idOrder, idCustomer } = req.body;
    const data = await fetch(
      `https://sandbox.dev.clover.com/v3/merchants/${process.env.NEXT_MID}/orders/${idOrder}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: ` Bearer ${process.env.NEXT_TOKEN}`,
        },
        body: JSON.stringify({
          customers: [
            {
              id: idCustomer,
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
