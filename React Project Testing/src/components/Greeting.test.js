import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  // Grouping Components into a single suite named Greeting Component.
  test("renders Hello King as a text", () => {
    //Arrange
    render(<Greeting />);

    // ACT... nothing

    //Assert
    const helloKingElement = screen.getByText("Hello King", { exact: false });
    expect(helloKingElement).toBeInTheDocument();
  });
  test("renders 'Lets kill some monsters' if the button is NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    // ACT... nothing

    //Assert
    const paragraphFirstElement = screen.getByText("lets kill some monsters", {
      exact: false,
    });
    expect(paragraphFirstElement).toBeInTheDocument();
  });
  test('renders "changed" if the button was clicked', () => {
    // ARRANGE
    render(<Greeting />);

    //ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // ASSERT
    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('does not render "Lets kill some monsters" if the button was clicked', () => {
    // ARRANGE
    render(<Greeting />);

    //ACT
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // ASSERT
    const outputElement = screen.queryByText("Lets kill some monsters", { exact: false });
    expect(outputElement).toBeNull();
  });
});
