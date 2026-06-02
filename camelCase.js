function toCamelCase(str) {
    return str
        .replace(/[-_]/g, " ")
        .split(" ").map((x, i) => i === 0 ? x : x.charAt(0).toUpperCase() + x.slice(1)).join("");

}