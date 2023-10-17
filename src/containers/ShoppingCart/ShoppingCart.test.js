import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
  within,
  queryByText,
  getByText,
} from "@testing-library/react";

import App from "../../App";

describe("<ShoppingCart/>", () => {
  it("Renders <ShoppingCart /> component correctly", async () => {
    render(<App />);
    expect(screen.getByText("My Cart")).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.queryByText(/Fetching Products.../i)
    );
  });
});

describe("Color Filter Test", () => {
  it("Renders Color Filter component correctly", async () => {
    render(<App />);

    expect(screen.queryByText("Fetching Products")).not.toBeInTheDocument();

    const filterSelect = screen.getByRole("combobox");

    await fireEvent.change(filterSelect, {value:"Stone"});

    const { getByText } = within(screen.getByTestId("cart-item"));

    expect(getByText("Stone")).toBeInTheDocument();
  });
});
