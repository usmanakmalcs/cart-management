import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import ShoppingCart from ".";

describe("<ShoppingCart/>", () => {
  it("Renders <ShoppingCart /> component correctly", async () => {
    render(<ShoppingCart />);
    expect(screen.getByText("My Cart")).toBeInTheDocument();

    await waitForElementToBeRemoved(
      screen.queryByText(/Fetching Products.../i)
    );
  });
});

