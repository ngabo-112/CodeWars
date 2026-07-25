function initializeNames(name) {
  const array = name.split(" ");
  return array
    .map((a, i) => {
      return i != 0 && i != array.length - 1
        ? `${a.charAt(0).toUpperCase()}. `
        : `${a} `;
    })
    .join("");
}
