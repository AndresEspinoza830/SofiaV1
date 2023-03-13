import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://flyer250.com/restaurant",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products/categories");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function obtenerProductos(category) {
  try {
    const response = await api.get(
      `products?categories=${category}&per_page=40`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function obtenerProductoPagina(slug) {
  try {
    const response = await api.get(`products?slug=${slug}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function productoCross(id) {
  try {
    const response = await api.get(`products?include=${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// WooCommerce.post("orders", data)
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.log(error.response.data);
//     });

export async function crearOrder(data) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
