import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import App from "../../App";

// Mock the fetch function to simulate API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          colour: "Black",
          name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
          price: 10,
          img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        },
        {
          id: 2,
          colour: "Red",
          name: "Red Pin Stripe Belt T Shirt Dress",
          price: 10,
          img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        },
        {
          id: 3,
          colour: "Stone",
          name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
          price: 17,
          img: "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024",
        },
      ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("<App/>", () => {
  test("renders App Compoennt", async () => {
    render(<App />);
    expect(screen.getByText("My Cart")).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.queryByText(/Fetching Products.../i)
    );
  });
});

describe("Color Filter Component", () => {
  test("Color filter component", async () => {
    render(<App />);
    const productElement = await screen.findByText(
      "Black Sheet Strappy Textured Glitter Bodycon Dress"
    );
    expect(productElement).toBeInTheDocument();
  });
});

describe("Update Filter And Verify Results", () => {
  test("filters products by color", async () => {
    render(<App />);

    const colorFilter = await screen.findByLabelText("Filter by Color:");
    fireEvent.change(colorFilter, { target: { value: "Black" } });

    // Test that products with selected colors should be there
    const { getByText, queryByText } = within(screen.getByTestId("cart-item"));

    const productElement = getByText(
      "Black Sheet Strappy Textured Glitter Bodycon Dress"
    );

    expect(productElement).toBeInTheDocument();

    // Test that products with other colors are not displayed
    const productWithRedColor = queryByText("Red");

    expect(productWithRedColor).toBeNull();

    const productWithStoneColor = queryByText("Stone");

    expect(productWithStoneColor).toBeNull();
  });
});

test("renders ProductList component and interacts with the cart", async () => {
  render(<App />);

  const productElement = screen.getByText(
    "Black Sheet Strappy Textured Glitter Bodycon Dress"
  );
  expect(productElement).toBeInTheDocument();

  const { getByText } = within(screen.getAllByTestId("product-quantity")[0]);
  const initialQuantity = getByText("0");
  expect(initialQuantity).toBeInTheDocument();

  // Add a product to the cart
  const addButtons = screen.getAllByTestId("add-to-cart");
  fireEvent.click(addButtons[0]);

  const updatedQuantity = getByText("1");
  expect(updatedQuantity).toBeInTheDocument();

  // Remove a product from the cart (Having issue in it, expecting a quantity to 0 but it's not working here)
  const removeButtons = screen.getAllByTestId("remove-from-cart");
  fireEvent.click(removeButtons[0]);

  const removedQuantity = getByText("0");
  expect(removedQuantity).toBeInTheDocument();
});

test("render DeleteCart Button", async () => {
  render(<App />);

  const productElement = screen.getByText(
    "Black Sheet Strappy Textured Glitter Bodycon Dress"
  );
  expect(productElement).toBeInTheDocument();

  const deleteIconQuery = screen.queryByTestId("delete-cart-icon");

  expect(deleteIconQuery).not.toBeInTheDocument();

  // Add a product to the cart
  const addButtons = screen.getAllByTestId("add-to-cart");
  userEvent.click(addButtons[0]);

  // Verify Delete Cart Button
  await waitFor(
    () => {
      const deleteAllCartButton = screen.getByTestId("delete-cart-icon");
      expect(deleteAllCartButton).toBeInTheDocument();
    },
    { timeout: 1000 }
  );
  
  const deleteAllCartButton = screen.getByTestId("delete-cart-icon");
  userEvent.click(deleteAllCartButton);

  // Open Confirmation Modal
  await waitFor(
    () => {
      // Check that the Ant Design modal is displayed
      const confirmationModal = screen.getByText(
        `Are you sure, you want to clear quantity of product "Black Sheet Strappy Textured Glitter Bodycon Dress"`
      );
      expect(confirmationModal).toBeInTheDocument();
    },
    { timeout: 1000 }
  );

  const okButton = screen.getByText("Yes");
  userEvent.click(okButton);

  // Verify Quantity should be 0
  await waitFor(() => {
    const { getByText } = within(screen.getAllByTestId("product-quantity")[0]);
    const updatedQuantity = getByText("0");
    expect(updatedQuantity).toBeInTheDocument();
  }, 1000);

  // Close Confirmation Modal
  const closedConfirmationModal = screen.queryByText(
    `Are you sure, you want to clear quantity of product "Black Sheet Strappy Textured Glitter Bodycon Dress"`
  );

  expect(closedConfirmationModal).not.toBeInTheDocument();
});
