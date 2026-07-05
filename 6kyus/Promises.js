/* # Practical

**Task:** Write a function named `getEligibleUsers()` that returns a Promise.

- Return only users whose `active` property is `true`.
- Remove duplicate users based on their `id`.
- Resolve with the final list of users.

```jsx
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true },
  { id: 4, name: "David", active: false },
  { id: 3, name: "Charlie", active: true }
];

getEligibleUsers()
  .then(users => console.log(users))
  .catch(error => console.error(error));

/*
Expected outcome
[
  { id: 1, name: "Alice", active: true },
  { id: 3, name: "Charlie", active: true }
]
``` */
function (arr=[])