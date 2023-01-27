[
  {
    content:
      "## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.",
    type: "text",
    id: "12frm",
  },
  {
    content:
      'import { render, screen } from \'@testing-library/react\';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href="/">Link</a>\n      <button>Button</button>\n      <footer>Contentinfo</footer>\n      <h1>heading</h1>\n      <header>Banner</header>\n      <img alt="description" /> Img\n      <input type="checkbox" /> Checkbox\n      <input type="number" /> Spinbutton\n      <input type="radio" /> radio\n      <input type="text" />Textbox\n      <li>Listitem</li>\n      <ul>Listgroup</ul>\n    </div>\n  )\n}\n\nrender(<RoleExample />)',
    type: "code",
    id: "qwwod",
  },
  {
    content:
      "test('can find elements by role', () => {\n  render(<RoleExample />);\n\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list',\n  ];\n\n  for (let role of roles) {\n    const el = screen.getByRole(role);\n\n    expect(el).toBeInTheDocument();\n  }\n});",
    type: "code",
    id: "35ej9",
  },
  {
    content:
      "function AccessibleName() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  )\n}\n\nrender(<AccessibleName />)",
    type: "code",
    id: "cylqf",
  },
  {
    content:
      "test('can select by accessible name', () => {\n  render(<AccessibleName />);\n\n  const submitButton = screen.getByRole('button', { name: /submit/i });\n  const cancelButton = screen.getByRole('button', { name: /cancel/i });\n\n  expect(submitButton).toBeInTheDocument();\n  expect(cancelButton).toBeInTheDocument();\n});",
    type: "code",
    id: "r6fii",
  },
  {
    content:
      'function MoreNames() {\n  return (\n    <div>\n    <label htmlFor="email">Email</label>\n    <input id="email" />\n\n    <label htmlFor="search">Search</label>\n    <input id="search" />\n    </div>\n  )\n}\n\nrender(<MoreNames />)',
    type: "code",
    id: "u2sw0",
  },
  {
    content:
      "test('shows an email and search input', () => {\n  render(<MoreNames />);\n\n  const emailInput = screen.getByRole('textbox', { name: /email/i })\n  const searchInput = screen.getByRole('textbox', { name: /search/i })\n\n  expect(emailInput).toBeInTheDocument();\n  expect(searchInput).toBeInTheDocument();\n})",
    type: "code",
    id: "vp0zn",
  },
  {
    content:
      'function IconButtons() {\n  return (\n    <div>\n    <button aria-label="sign in">\n      <svg />\n    </button>\n\n    <button aria-label="sign out">\n      <svg />\n    </button> \n    </div>\n  )\n}\n\nrender(<IconButtons />)',
    type: "code",
    id: "9x7ct",
  },
  {
    content:
      "test('find elements based on label', () => {\n  render(<IconButtons />);\n\n  const buttonSignIn = screen.getByRole('button', { name: /sign in/i });\n  const buttonSignOut = screen.getByRole('button', { name: /sign out/i });\n\n  expect(buttonSignIn).toBeInTheDocument();\n  expect(buttonSignOut).toBeInTheDocument();\n});",
    type: "code",
    id: "1rceq",
  },
];
