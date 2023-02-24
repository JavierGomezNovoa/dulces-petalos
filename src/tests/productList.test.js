// ProductList.test.js

// import necessary testing utilities
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import the component being tested
import ProductList from "../components/productList";

// create mock data for products to be passed as props
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

// define the test suite for the ProductList component
describe("ProductList", () => {
  // test that the ProductList component renders
  it("renders the product list", () => {
    // render the ProductList component with mock data
    render(<ProductList allProducts={mockProducts} />);

    // assert that the product list and its items are in the document
    expect(screen.getByTestId("productList")).toBeInTheDocument();
    expect(screen.getByTestId("listItem1")).toBeInTheDocument();
    expect(screen.getByTestId("listItem2")).toBeInTheDocument();
  });

  // test that the ProductList component renders product links
  it("renders product links", () => {
    // render the ProductList component with mock data
    render(<ProductList allProducts={mockProducts} />);

    // get all links rendered by the component
    const productLinks = screen.getAllByRole("link");

    // assert that the number of links matches the number of mock products
    expect(productLinks.length).toBe(mockProducts.length);
  });

  // test that the correct Link components are rendered for each product item
  it("should render the correct Link components for each product item", () => {
    // render the ProductList component with mock data
    render(<ProductList allProducts={mockProducts} />);

    // assert that the link components have the correct href attribute values
    expect(screen.getByTestId("link1")).toHaveAttribute("href", "/1");
    expect(screen.getByTestId("link2")).toHaveAttribute("href", "/2");
  });

  /* // test that clicking on a product link navigates to the correct product page
  it("navigates to the correct product page when clicking on a link", async () => {
    // render the ProductList component with mock data
    render(<ProductList allProducts={mockProducts} />);

    // get the product link to test
    const productLink = screen.getByRole("link", {
      name: "Lily Lily Lilium 15€",
    });

    // simulate a click on the product link
    productLink.click();

    // wait for the component to rerender with the new URL
    await waitFor(expect(window.location.pathname).toBe("/2"));
  }); */
});
