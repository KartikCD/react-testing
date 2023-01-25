import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    {
      name: "kartik",
      email: "kartik@kartik.com",
    },
    {
      name: "john",
      email: "john@kartik.com",
    },
  ];
  render(<UserList users={users} />);

  return { users };
}

beforeEach(() => {});

test("render one row per user", () => {
  renderComponent();
  // Render the component
  //   const { container } = render(<UserList users={users} />);
  //   render(<UserList users={users} />);

  // Find all the roles on table
  //   screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole("row");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  //   const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render name and email of each user", () => {
  const { users } = renderComponent();

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
