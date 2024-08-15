import { forEach } from "lodash";

const containsInvalidCharacter = (str) => {
  return [...str].some((char) => char !== "0" && char !== "1");
};

const formatFile = (file = []) => {
  let result = [];
  forEach(file, (row = []) => {
    if (row[0] && !containsInvalidCharacter(row[0])) {
      const rowData = row[0].split("");
      result.push(rowData);
    }
  });
  return result;
};

const findConnectedShape = ({ grid, x, y }) => {
  const stack = [{ x, y }];

  while (stack.length > 0) {
    const { x, y } = stack.pop();

    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) {
      continue;
    }

    if (grid[y][x] === "1") {
      // Mark as visited by setting to "0"
      grid[y][x] = "0";

      // Push the neighboring cells onto the stack
      stack.push({ x: x + 1, y: y });
      stack.push({ x: x - 1, y: y });
      stack.push({ x: x, y: y + 1 });
      stack.push({ x: x, y: y - 1 });
    }
  }
};

const lookUpGrid = (grid = []) => {
  let result = 0;
  grid.forEach((row = [], rowIndex) => {
    row.forEach((value, itemIndex) => {
      if (value === "1") {
        result++;

        findConnectedShape({ grid, x: itemIndex, y: rowIndex });
      }
    });
  });

  return result;
};

export { lookUpGrid, formatFile };
