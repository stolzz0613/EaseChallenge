const manageFile = require('./manageFile')
const dfsActions = require('./dfsActions')
const fs = require('fs')

/**
 * Main function that reads a file and calls the checkGrid function.
 * @param {string} file - The name of the file to read.
*/
manageFile.read('4x4.txt', grid => checkGrid(grid))

/**
 * Function that finds the longest path in a grid with the highest drop.
 * @param {Array} grid - The grid in the form of an array of integers.
*/
const checkGrid = (grid) => {
  const [columns, rows] = manageFile.getDimensions(grid)
  let results = {
    grid: manageFile.getGrid(grid),
    maxLength: 0,
    maxDrop: 0,
    path: [],
    coords: [],
    numbers: []
  }

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      const currentNode = results.grid[x][y];
      if (results.maxLength < currentNode) {
        results = dfsActions.inspectBranch(x, y, 1, currentNode, [columns, rows], results, currentNode, [`${x}, ${y}`])
      }
    }
  }

  // Log the results to the console
  console.log(`Longest and Steepest Path: ${results.numbers}`);
  console.log(`Steepness: ${results.maxDrop}`);
  console.log(`Length: ${results.maxLength}`);

  // Write the results to JSON files (Just for testing and visualization)
  /**
    let data = JSON.stringify(results.path);
    let answer = JSON.stringify(results.maxPath);
    let gridJSON = JSON.stringify(results.grid);
    fs.writeFileSync(__dirname + '/front-challenge/results.json', data);
    fs.writeFileSync(__dirname + '/front-challenge/grid.json', gridJSON);
    fs.writeFileSync(__dirname + '/front-challenge/answer.json', answer);
  */
}