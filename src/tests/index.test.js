// Import necessary libraries and components
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";
import { getStaticProps } from "@/pages/index";
import { getAllProducts } from "@/lib/products";

// Define mock products data
const mockProducts = [
  {
    id: 1,
    name: "Rose",
    binomialName: "Rosa",
    price: 10,
    imgUrl: "/rose.jpg",
  },
  {
    id: 2,
    name: "Lily",
    binomialName: "Lilium",
    price: 15,
    imgUrl: "/lily.jpg",
  },
];

describe("<Home />", () => {
  // Test that Home component renders Layout, SearchBar and a ProductList
  it("renders Layout, SearchBar and a ProductList", () => {
    // Render Home component with mock products as props
    render(<Home allProducts={mockProducts} />);

    // Expect Layout element to be in the document
    expect(screen.getByTestId("layout")).toBeInTheDocument();

    // Expect SearchBar element to be in the document
    expect(screen.getByTestId("searchBar")).toBeInTheDocument();

    // Expect ProductList element to be in the document
    expect(screen.getByTestId("productList")).toBeInTheDocument();

    // Expect 2 listItems elements to be in the document
    expect(screen.getByTestId("listItem1")).toBeInTheDocument();
    expect(screen.getByTestId("listItem2")).toBeInTheDocument();
  });
});

// Mock getAllProducts function
jest.mock("@/lib/products", () => ({
  getAllProducts: jest.fn(),
}));

// Test the getStaticProps function
describe("getStaticProps", () => {
  beforeAll(() => {
    getAllProducts.mockResolvedValue(mockProducts);
  });

  it("should return the expected props", async () => {
    const props = await getStaticProps();

    // Expect getAllProducts to be called once
    expect(getAllProducts).toHaveBeenCalledTimes(1);

    // Expect props to equal the mockProducts array
    expect(props).toEqual({
      props: {
        allProducts: mockProducts,
      },
    });
  });
});

// Test the handleChange function
describe("handleChange function filters products correctly", () => {
  it("should update the product list based on the user input", () => {
    // Render Home component with mock products as props
    render(<Home allProducts={mockProducts} />);

    // Get the SearchBar element
    const input = screen.getByTestId("searchBar");

    // Simulate user input with the value of "rose"
    fireEvent.change(input, { target: { value: "rose" } });

    // Expect the ProductList element to have "Rose" in its text content
    expect(screen.getByTestId("productList")).toHaveTextContent("Rose");

    // Expect the ProductList element not to have "Lily" in its text content
    expect(screen.getByTestId("productList")).not.toHaveTextContent("Lily");
  });
});
