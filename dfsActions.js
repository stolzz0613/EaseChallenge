const xMovement = [0, 1, 0, -1];
const yMovement = [1, 0, -1, 0];

/**
 * Function that inspects a branch in a grid.
 * @param {number} x - The x coordinate of the starting point in the grid.
 * @param {number} y - The y coordinate of the starting point in the grid.
 * @param {number} length - The current length of the path.
 * @param {number} currentNode - The current node.
 * @param {Array} dimensions - The dimensions of the grid in the form of [columns, rows].
 * @param {Object} results - An object containing the results of the path inspection.
 * @param {string} number - The current path being inspected.
 * @param {Array} coords - An array with the coordinates of the current path
 * @returns {Object} - An object containing the results of the path inspection.
 */

const inspectBranch = (x, y, length, currentNode, dimensions, results, numbers, coords) => {
  const [columns, rows] = dimensions;
  const { grid } = results;

  for (let c = 0; c < 4; c++) {
    const xOffSet = x + xMovement[c];
    const yOffSet = y + yMovement[c];
    const isInMatrix = xOffSet >= 0 && xOffSet < columns && yOffSet >= 0 && yOffSet < rows;
    const isHigher = grid && grid[x][y] > grid?.[xOffSet]?.[yOffSet];

    // If the new point is in the grid and has a higher height,
    // call the function recursively with the new point as the starting point
    if (isInMatrix && isHigher) {
      let newCoords = [...coords, `${xOffSet}, ${yOffSet}`];
      let newNumbers = numbers +'-'+ grid[xOffSet][yOffSet];
      inspectBranch(xOffSet, yOffSet, length + 1, currentNode, dimensions, results, newNumbers, newCoords);
    }
  }

  const drop = currentNode - grid[x][y];
  if (length > results.maxLength) {
    results.maxLength = length;
    results.maxDrop = drop;
    results.coords = coords;
    results.numbers = numbers;
  } else if (length === results.maxLength && results.maxDrop < drop) {
    results.maxDrop = drop;
    results.coords = coords;
    results.numbers = numbers;
  }

  results.path.push(coords);
  results.pathNumbers.push(`${numbers}`)
  return results;
}

module.exports = {
  inspectBranch
};
