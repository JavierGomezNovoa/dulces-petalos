export async function getAllProducts() {
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const response = await fetch(
    `https://dulces-petalos.herokuapp.com/api/product/${id}`
  );
  const data = await response.json();
  return data;
}
