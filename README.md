# React App testing notes

### Notes

- Invoke test by using `test()` function which is built in our global environment. This function is provided by our test runner, which is jest. First argument of test function is short description of what we are going to test. Second argument is going to be a function itself.

- Inside test function steps
  - First step is to render component to work with.
  - Manipulate component or find element in it.
  - Assertion - make sure component is doing what we expected to do.

### How test internally runs

- When test runs it is executed in a Node.js environment. There is no browser (chrome, firefox).
- When `render()` function called a fake browser environment is created by JSDom.
- After render we can access elements which is rendered in here using screen object provided by react-testing library. This function also returns couple of helper properties. eg. **container**
- Then we do assertion. we commonly use `expect()` function where we pass some value and chain with function referred as matcher.

[List of matchers by jest](https://jestjs.io/docs/expect)

[List of matchers by React testing library](https://github.com/testing-library/jest-dom)

### Mocking

- Mock = fake functions that doesn't do anything.
- records whenever it is get called (number of times it is called.), and the arguments it was called with.
- very often used when we need to make sure a components calls a callback.
- to create mock function

```
const mock = jest.fn();
```

### Hacks - (Fallbacks)

sometimes finding correct element with aria-roles becomes tricky. there are some hacks

1. `data-testid`

- using `data-testid` prop to element. Example. using `within()` function we can find value of testid prop and then find that particular element.

  ```
  within(screen.getByTestId('users')).getAllByRole('row');
  ```

- **Not recomended** : cause we are just modifying element in order to make it more testable.

2. `container.querySelector`

```
  const { container } = render(<UserList users={users} />);

  const rows = container.querySelectorAll("tbody tr");
```

### Some global functions

1. `beforeEach()`: Jest is gonna run this arrow function before running individual test. This is great to do some initial setup.
