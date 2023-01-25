import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows 2 inputs and a button", () => {
  // Render component
  render(<UserForm />);

  // Manipulate the component or find a element in it.
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onUserAdd when form is submitted", () => {
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find 2 inputs
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /enter email/i });

  // Simulate typing in an name
  user.click(nameInput);
  user.keyboard("kartik");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("kartik@kartik.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "kartik",
    email: "kartik@kartik.com",
  });
});

test("empties the two inputs when form is submitted", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("kartik");
  user.click(emailInput);
  user.keyboard("kartik@kartik.com");

  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
