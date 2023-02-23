export async function getAllProducts() {
  try {
    const response = await fetch(
      "https://dulces-petalos.herokuapp.com/api/product"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(
      `https://dulces-petalos.herokuapp.com/api/product/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
