export default async function handler(req, res) {
  try {
    // const server = express();
    // server.use(express.json());
    const orderType = req.body;
    const idOrderType = orderType[0];
    const data = await fetch(
      `https://sandbox.dev.clover.com/v3/merchants/${process.env.NEXT_MID}/orders`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${process.env.NEXT_TOKEN}`,
        },
        body: JSON.stringify({
          state: "open",
          orderType: {
            id: idOrderType,
          },
        }),
      }
    );
    const datas = await data.json();
    res.json(datas);
  } catch (error) {
    console.log(error);
  }
}
