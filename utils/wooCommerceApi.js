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
    const response = await api.get("products/categories?per_page=20");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function obtenerProductosCategoria(category) {
  try {
    const response = await api.get(`products?category=${category}&per_page=12`);
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

export async function crearOrder(data) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
