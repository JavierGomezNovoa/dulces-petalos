export async function getAllProducts() {
  const response = await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  );
  const data = await response.json();
  return data;
}
