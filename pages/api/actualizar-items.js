export default async function handler(req, res) {
  try {
    const [arr1, arr2] = req.body;
    const orderId = arr2[0];

    const arrayItems = arr1.map((p) => {
      return {
        item: {
          id: p.sku,
        },
        name: p.name,
        price: parseInt(p.price),
      };
    });

    const data = await fetch(
      `https://sandbox.dev.clover.com/v3/merchants/${process.env.NEXT_MID}/orders/${orderId}/bulk_line_items`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${process.env.NEXT_TOKEN}`,
        },
        body: JSON.stringify({
          id: orderId,
          items: arrayItems,
        }),
      }
    );
    res.json(arrayItems);
  } catch (error) {
    console.log(error);
  }
}
