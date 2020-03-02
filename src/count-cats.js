module.exports = function countCats(/* matrix */) {
   return  matrix.reduce((block, index) => {
        return  block + index.filter((x) => x === '^^').length
    }, 0);
};
