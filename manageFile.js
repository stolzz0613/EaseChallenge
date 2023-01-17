const fs = require('fs');

const read = (file, callback) => {
    fs.readFile(`${__dirname}/grids/${file}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(data.split('\n'));
    });
};

const getDimensions = grid => grid[0].split(' ').map(e => parseInt(e, 10));

const getGrid = text => text
    .splice(1)
    .map(t => t.split(' ')
    .map(e => parseInt(e, 10)));

module.exports = {
    read,
    getDimensions,
    getGrid,
};
