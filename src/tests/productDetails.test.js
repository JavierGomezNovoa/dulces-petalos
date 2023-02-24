// Import necessary functions and components
import { render, screen } from "@testing-library/react";
import ProductDetails from "../components/productDetails";
import "@testing-library/jest-dom/extend-expect";

// Create a mock product object to use as test data
const mockProductData = {
  id: 1,
  name: "Rose",
  binomialName: "Rosa",
  price: 10,
  wateringsPerWeek: 1,
  fertilizerType: "Liquid",
  heightInCm: 200,
  imgUrl: "/rose.jpg",
};

// Start test suite for ProductDetails component
describe("ProductDetails component", () => {
  // Test that product details render correctly
  it("should render product details correctly", () => {
    render(<ProductDetails productData={mockProductData} />);

    // Check that the product name is in the document
    const productName = screen.getByText(/Rose/i);
    expect(productName).toBeInTheDocument();

    // Check that the binomial name is in the document
    const binomialName = screen.getByText(/Rosa/i);
    expect(binomialName).toBeInTheDocument();

    // Check that the price is in the document
    const price = screen.getByText(/10€/i);
    expect(price).toBeInTheDocument();

    // Check that the watering information is in the document
    const waterings = screen.getByText(/1 watering\(s\) per week/i);
    expect(waterings).toBeInTheDocument();

    // Check that the fertilizer type is in the document
    const fertilizer = screen.getByText(/Liquid/i);
    expect(fertilizer).toBeInTheDocument();

    // Check that the height is in the document
    const height = screen.getByText(/200 cm/i);
    expect(height).toBeInTheDocument();

    // Check that the image is in the document
    const image = screen.getByAltText(/Rose/i);
    expect(image).toBeInTheDocument();
  });

  // Test that the back button works and navigates to the home page
  it("should render a back button that navigates to home page", () => {
    render(<ProductDetails productData={mockProductData} />);

    // Get the back button element and check that it is in the document
    const backButton = screen.getByTestId("backButtonLink");
    expect(backButton).toBeInTheDocument();

    // Check that the back button has the correct href attribute
    expect(backButton).toHaveAttribute("href", "/");

    // Click the back button and check that the window location path changes to the home page
    backButton.click();
    expect(window.location.pathname).toEqual("/");
  });
});
