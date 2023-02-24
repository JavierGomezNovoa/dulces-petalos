// products.test.js
import { getAllProducts, getProductById } from "@/lib/products.mjs";
import { getStaticPaths, getStaticProps } from "@/pages/[id]";

// Mock product data
const mockProducts = [
  { id: 1, name: "Rose" },
  { id: 2, name: "Lily" },
  { id: 3, name: "Petunia" },
];

// Mock product data for a single product
const mockProductData = { id: 1, name: "Rose" };

// Mock params object for getStaticProps
const mockParams = { params: { id: 1 } };

// Mock product data for the expected result of getStaticProps
const mockPropsResult = { props: { productData: mockProductData } };

jest.mock("@/lib/products.mjs", () => ({
  getAllProducts: jest.fn(),
  getProductById: jest.fn(),
}));

describe("getStaticPaths", () => {
  it("should return an array of paths", async () => {
    // Mock getAllProducts function
    getAllProducts.mockResolvedValue(mockProducts);

    const result = await getStaticPaths();

    expect(result).toEqual({
      paths: [
        { params: { id: 1 } },
        { params: { id: 2 } },
        { params: { id: 3 } },
      ],
      fallback: false,
    });
  });
});

describe("getStaticProps", () => {
  it("should return the correct product data", async () => {
    // Mock getProductById function
    getProductById.mockResolvedValue(mockProductData);

    const result = await getStaticProps(mockParams);

    expect(result).toEqual(mockPropsResult);
  });
});
