export default async function handler(req, res) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: "Bearer 67f247f948946236c52cd3bfcebe4a67",
      },
    };

    const data = await fetch(
      "https://sandbox.dev.clover.com/v3/merchants/510RHCKER9AW1/order_types",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: "Bearer 67f247f9-4894-6236-c52c-d3bfcebe4a67",
        },
      }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
